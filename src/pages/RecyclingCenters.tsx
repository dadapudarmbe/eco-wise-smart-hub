
import React from 'react';
import { Recycle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RecyclingCenters = () => {
  // This will be replaced with your recycling centers data source
  const recyclingCentersUrl = "https://your-recycling-centers-api.com";
  
  // Sample recycling center data
  const sampleCenters = [
    {
      name: "Green Earth Recycling",
      address: "123 Eco Street, Green City",
      hours: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
      materials: ["Paper", "Plastic", "Glass", "Metal", "Electronics"],
      phone: "(555) 123-4567"
    },
    {
      name: "City Waste Management Center",
      address: "456 Sustainability Ave, Green City",
      hours: "Mon-Fri: 7AM-7PM, Sat: 9AM-5PM, Sun: Closed",
      materials: ["Paper", "Plastic", "Glass", "Metal", "Hazardous Waste"],
      phone: "(555) 987-6543"
    },
    {
      name: "ECycle Electronics",
      address: "789 Tech Drive, Green City",
      hours: "Mon-Fri: 9AM-6PM, Sat-Sun: Closed",
      materials: ["Electronics", "Batteries", "Light Bulbs"],
      phone: "(555) 456-7890"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 eco-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Recycle className="h-8 w-8 text-eco-green" />
            <h1 className="eco-heading">Recycling Centers</h1>
          </div>
          
          <p className="text-center mb-12 eco-text max-w-2xl mx-auto">
            Find recycling centers near you, learn about accepted materials, and get operating hours.
          </p>
          
          <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="text-center text-eco-blue">Find a Recycling Center</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="eco-text text-center">
                  External recycling centers map will be integrated here.
                  Replace with your recycling centers API or embed.
                </p>
              </div>
              
              <div className="aspect-video w-full">
                {/* This will be replaced with your actual recycling center map integration */}
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center p-4">
                    <Recycle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Recycling centers map placeholder</p>
                    <p className="text-sm text-muted-foreground">
                      Replace with your recycling centers API:<br />
                      <code className="bg-background p-1 rounded text-xs">{recyclingCentersUrl}</code>
                    </p>
                  </div>
                </div>
                
                {/* Uncomment and update with your actual recycling centers map */}
                {/* <iframe 
                  src={recyclingCentersUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title="Recycling Centers Map"
                ></iframe> */}
              </div>
            </CardContent>
          </Card>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="eco-subheading mb-6">Featured Recycling Centers</h2>
            
            <div className="space-y-6">
              {sampleCenters.map((center, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5">
                      <div className="md:col-span-2 bg-eco-green p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
                        <p className="mb-2">{center.address}</p>
                        <p className="text-sm">{center.hours}</p>
                        <p className="mt-2">{center.phone}</p>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h4 className="font-semibold mb-2">Accepted Materials:</h4>
                        <div className="flex flex-wrap gap-2">
                          {center.materials.map((material, i) => (
                            <span 
                              key={i}
                              className="bg-muted px-3 py-1 rounded-full text-sm"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">
                            Always call ahead to confirm operating hours and accepted materials.
                          </p>
                          <button className="text-eco-blue hover:underline text-sm">
                            Get Directions
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Tips for Recycling:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="eco-text">Clean all containers before recycling</li>
                <li className="eco-text">Remove caps from plastic bottles</li>
                <li className="eco-text">Flatten cardboard boxes</li>
                <li className="eco-text">Keep plastic bags out of regular recycling</li>
                <li className="eco-text">Check your local guidelines for specific rules</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecyclingCenters;
