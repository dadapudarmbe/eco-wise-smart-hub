
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Recycle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WasteClassification = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div className="p-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-4 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
      
      <div className="mb-8">
        <iframe 
          src="https://model-40w9.onrender.com"
          className="w-full h-[600px] border-0"
          title="Waste Classification Model"
        />
      </div>
      
      <div className="flex justify-center mb-12">
        <Button
          onClick={() => navigate('/recycling-centers')}
          className="flex items-center gap-2 bg-eco-green hover:bg-eco-green-dark active:bg-eco-blue transition-colors duration-200"
        >
          <Recycle className="w-5 h-5" />
          Find Recycling Centers
        </Button>
      </div>

      {/* Floating Chatbot Button */}
      <Button
        onClick={() => navigate('/eco-chatbot')}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-eco-blue hover:bg-eco-blue-light shadow-lg flex items-center justify-center p-0"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WasteClassification;
