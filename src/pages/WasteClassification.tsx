
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WasteClassification = () => {
  const navigate = useNavigate();
  
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      navigate('/');
    }
  }, [navigate]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-4 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Home (or press ESC)
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
          className="flex items-center gap-2 bg-eco-green hover:bg-eco-green-dark"
        >
          <Recycle className="w-5 h-5" />
          Find Recycling Centers
        </Button>
      </div>
    </div>
  );
};

export default WasteClassification;
