
import React from 'react';
import { Recycle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-green-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Recycle className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">EcoWise Hub</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-eco-earth-light transition-colors">About Us</a>
            <a href="#" className="hover:text-eco-earth-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-eco-earth-light transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-eco-green-light">
          <p>© {new Date().getFullYear()} EcoWise Hub. All rights reserved.</p>
          <p className="mt-2">Making sustainable living accessible for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
