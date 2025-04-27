
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnergyTracker = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
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
          src="https://llamacoder.together.ai/share/v2/AiDjHQhN1ev3MWSj"
          className="w-full h-[800px] border-0"
          title="Energy Tracker"
        />
      </div>
    </div>
  );
};

export default EnergyTracker;
