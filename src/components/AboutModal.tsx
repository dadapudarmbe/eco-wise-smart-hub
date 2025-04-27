
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Leaf, TreeDeciduous } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-eco-green" />
            About EcoWise Hub
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <p className="text-lg mb-4">
            EcoWise Hub is your comprehensive platform for sustainable living and environmental consciousness. We're dedicated to making eco-friendly choices accessible and intuitive for everyone.
          </p>
          <div className="flex items-center gap-2 text-eco-green">
            <TreeDeciduous className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="mt-2">
            To empower individuals with tools and knowledge for sustainable living, making environmental consciousness an integral part of daily life through technology and community engagement.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
