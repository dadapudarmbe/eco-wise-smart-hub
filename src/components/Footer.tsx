
import React, { useState } from 'react';
import { Recycle } from 'lucide-react';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';

const Footer: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-eco-green-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Recycle className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">EcoWise Hub</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => setShowAbout(true)} 
              className="hover:text-eco-earth-light transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => setShowContact(true)} 
              className="hover:text-eco-earth-light transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-eco-green-light">
          <p>© {new Date().getFullYear()} EcoWise Hub. All rights reserved.</p>
          <p className="mt-2">Making sustainable living accessible for everyone.</p>
        </div>
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </footer>
  );
};

export default Footer;
