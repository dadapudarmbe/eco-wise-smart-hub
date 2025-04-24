
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecyclingCenters from './RecyclingCenters';

const WasteClassification = () => {
  const navigate = useNavigate();
  
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      navigate('/');
    }
  }, [navigate]);
  
  useEffect(() => {
    // Add keyboard listener
    window.addEventListener('keydown', handleKeyPress);
    
    // Remove keyboard listener on cleanup
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
      
      <div className="mb-12">
        <iframe 
          src="https://model-40w9.onrender.com"
          className="w-full h-[600px] border-0"
          title="Waste Classification Model"
        />
      </div>
      
      <RecyclingCenters />
    </div>
  );
};

export default WasteClassification;
