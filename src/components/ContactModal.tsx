
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Project Lead",
      email: "alex@ecowisehub.com",
    },
    {
      name: "Sarah Chen",
      role: "Sustainability Expert",
      email: "sarah@ecowisehub.com",
    },
    {
      name: "Michael Kumar",
      role: "Technical Lead",
      email: "michael@ecowisehub.com",
    },
    {
      name: "Emma Wilson",
      role: "Community Manager",
      email: "emma@ecowisehub.com",
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-eco-blue" />
            Contact Our Team
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="p-4 rounded-lg border border-border hover:border-eco-blue transition-colors"
            >
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <a 
                href={`mailto:${member.email}`} 
                className="text-eco-blue hover:text-eco-blue-dark transition-colors"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
