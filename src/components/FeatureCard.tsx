
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  iconColor?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  iconColor = "text-eco-green",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: delay ? delay / 1000 : 0, // convert ms to seconds
        type: "spring",
        stiffness: 80,
        damping: 16
      }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{
        y: -12,
        scale: 1.045,
        boxShadow: "0 12px 28px 0 rgba(44,133,125,0.08), 0 2px 4px 0 rgba(0,0,0,0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full flex flex-col transition-shadow hover:shadow-2xl"
    >
      <Card className="eco-card h-full flex flex-col">
        <CardHeader className="flex flex-col items-center pb-2">
          <div className={`p-3 rounded-full bg-muted ${iconColor} mb-4`}>
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-center text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-center text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button asChild className="w-full bg-eco-green hover:bg-eco-green-dark">
            <Link to={link}>Explore {title}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;

