
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Recycle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-eco-green text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Recycle className="h-6 w-6 text-white animate-wave" />
          <Link to="/" className="text-xl font-bold">EcoWise Hub</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-eco-earth-light transition-colors">Home</Link>
          <Link to="/waste-classification" className="hover:text-eco-earth-light transition-colors">Waste Classification</Link>
          <Link to="/energy-tracker" className="hover:text-eco-earth-light transition-colors">Energy Tracker</Link>
          <Link to="/eco-chatbot" className="hover:text-eco-earth-light transition-colors">EcoChat</Link>
          <Link to="/recycling-centers" className="hover:text-eco-earth-light transition-colors">Recycling Centers</Link>
        </div>
        <div className="flex md:hidden">
          <Button variant="ghost" className="text-white">
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
