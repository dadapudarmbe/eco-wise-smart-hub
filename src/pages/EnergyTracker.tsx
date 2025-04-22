
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Energy, ChartBar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample data for energy consumption
const defaultMonthlyData = [
  { month: 'Jan', consumption: 320 },
  { month: 'Feb', consumption: 300 },
  { month: 'Mar', consumption: 340 },
  { month: 'Apr', consumption: 280 },
  { month: 'May', consumption: 250 },
  { month: 'Jun', consumption: 220 },
  { month: 'Jul', consumption: 240 },
  { month: 'Aug', consumption: 280 },
  { month: 'Sep', consumption: 260 },
  { month: 'Oct', consumption: 310 },
  { month: 'Nov', consumption: 350 },
  { month: 'Dec', consumption: 370 },
];

// Sample data for appliance usage
const defaultApplianceData = [
  { name: 'HVAC', usage: 42 },
  { name: 'Water Heater', usage: 18 },
  { name: 'Lighting', usage: 12 },
  { name: 'Refrigerator', usage: 8 },
  { name: 'Electronics', usage: 7 },
  { name: 'Washer/Dryer', usage: 6 },
  { name: 'Other', usage: 7 },
];

// Energy saving tips
const energySavingTips = [
  {
    category: 'Lighting',
    tips: [
      'Replace incandescent bulbs with LED bulbs',
      'Use natural light when possible',
      'Install motion sensors or timers for lights',
      'Turn off lights when not in use'
    ]
  },
  {
    category: 'HVAC',
    tips: [
      'Set your thermostat lower in winter and higher in summer',
      'Clean or replace HVAC filters regularly',
      'Use ceiling fans to circulate air',
      'Weatherstrip doors and windows to prevent drafts'
    ]
  },
  {
    category: 'Appliances',
    tips: [
      'Unplug electronics when not in use to avoid phantom energy draw',
      'Use appliances during off-peak hours',
      'Only run full loads in dishwasher and washing machine',
      'Use cold water for laundry when possible'
    ]
  }
];

const EnergyTracker = () => {
  const [monthlyData, setMonthlyData] = useState(defaultMonthlyData);
  const [applianceData, setApplianceData] = useState(defaultApplianceData);
  const [userInput, setUserInput] = useState({
    month: '',
    consumption: '',
    appliance: 'HVAC'
  });
  const [selectedTipCategory, setSelectedTipCategory] = useState('Lighting');
  
  // Handle user input for energy consumption
  const handleAddConsumption = () => {
    if (!userInput.month || !userInput.consumption) {
      toast.error('Please enter both month and consumption value');
      return;
    }
    
    const consumptionValue = parseFloat(userInput.consumption);
    if (isNaN(consumptionValue)) {
      toast.error('Consumption must be a number');
      return;
    }
    
    // Check if month already exists
    const existingMonthIndex = monthlyData.findIndex(item => 
      item.month.toLowerCase() === userInput.month.toLowerCase()
    );
    
    if (existingMonthIndex >= 0) {
      // Update existing month
      const updatedData = [...monthlyData];
      updatedData[existingMonthIndex].consumption = consumptionValue;
      setMonthlyData(updatedData);
    } else {
      // Add new month
      setMonthlyData([...monthlyData, {
        month: userInput.month,
        consumption: consumptionValue
      }]);
    }
    
    setUserInput({
      ...userInput,
      month: '',
      consumption: ''
    });
    
    toast.success('Energy consumption data added successfully');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 eco-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Energy className="h-8 w-8 text-eco-green" />
            <h1 className="eco-heading">Energy Consumption Tracker</h1>
          </div>
          
          <p className="text-center mb-12 eco-text max-w-2xl mx-auto">
            Monitor your energy usage, identify consumption patterns, and discover ways to reduce your environmental footprint.
          </p>
          
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="dashboard" className="text-lg py-3">
                <ChartBar className="mr-2 h-5 w-5" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="input" className="text-lg py-3">
                <Energy className="mr-2 h-5 w-5" />
                Input Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="mt-0 space-y-8">
              {/* Monthly Consumption Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-eco-blue">Monthly Energy Consumption</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <XAxis dataKey="month" />
                        <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="consumption"
                          stroke="#2D8B75"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Appliance Usage Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-eco-blue">Appliance Usage Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={applianceData}>
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: '% of Total', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="usage" fill="#3C8DAD" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Energy Saving Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-eco-blue">Energy Saving Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Label>Category</Label>
                    <Select value={selectedTipCategory} onValueChange={setSelectedTipCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {energySavingTips.map((category) => (
                          <SelectItem key={category.category} value={category.category}>
                            {category.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{selectedTipCategory} Tips:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {energySavingTips
                        .find(cat => cat.category === selectedTipCategory)?.tips
                        .map((tip, index) => (
                          <li key={index} className="eco-text">{tip}</li>
                        ))
                      }
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="input" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-eco-blue">Add Monthly Consumption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="month">Month</Label>
                        <Input
                          id="month"
                          placeholder="e.g. Jan"
                          value={userInput.month}
                          onChange={(e) => setUserInput({...userInput, month: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="consumption">Consumption (kWh)</Label>
                        <Input
                          id="consumption"
                          placeholder="e.g. 320"
                          value={userInput.consumption}
                          onChange={(e) => setUserInput({...userInput, consumption: e.target.value})}
                        />
                      </div>
                      <Button 
                        className="w-full bg-eco-green hover:bg-eco-green-dark"
                        onClick={handleAddConsumption}
                      >
                        Add Consumption Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tips and Suggestions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-eco-blue">Personalized Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="eco-text">
                        Based on your energy consumption data, here are some personalized suggestions to help you reduce your energy usage:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li className="eco-text">
                          Your highest energy consumption months are November and December. Consider adjusting your heating settings during these months.
                        </li>
                        <li className="eco-text">
                          HVAC systems account for 42% of your energy usage. Regular maintenance and smart thermostats can significantly reduce this consumption.
                        </li>
                        <li className="eco-text">
                          Your summer consumption is lower than winter. Keep up the good habits during summer months.
                        </li>
                      </ul>
                      <div className="bg-muted p-4 rounded-lg mt-4">
                        <h3 className="font-semibold mb-2">Potential Monthly Savings:</h3>
                        <div className="flex justify-between">
                          <span>With suggested changes:</span>
                          <span className="font-semibold text-eco-green">15-20%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnergyTracker;
