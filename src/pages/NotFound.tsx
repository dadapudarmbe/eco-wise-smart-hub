
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Recycle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-eco-green">
          <Recycle className="h-24 w-24 mx-auto animate-wave" />
        </div>
        <h1 className="text-4xl font-bold text-eco-green-dark mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-eco-green hover:bg-eco-green-dark mb-4">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
