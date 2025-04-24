
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const WasteClassification = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Show a loading toast
    toast.loading('Redirecting to waste classification model...');
    
    // Redirect to the external URL
    window.location.href = 'https://model-40w9.onrender.com';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirecting to waste classification model...</p>
      </div>
    </div>
  );
};

export default WasteClassification;
