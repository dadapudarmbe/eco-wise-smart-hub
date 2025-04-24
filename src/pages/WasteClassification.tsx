
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
    
    // Show a loading toast
    toast.loading('Redirecting to waste classification model...');
    
    // Open the classification model in a new window
    window.open('https://model-40w9.onrender.com', '_blank');
    
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
      
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 mb-8">
          The waste classification model has been opened in a new tab.
          After classification, check out these recycling centers:
        </p>
      </div>
      
      <RecyclingCenters />
    </div>
  );
};

export default WasteClassification;
