
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card className="eco-card h-full flex flex-col" 
      style={{
        animationDelay: `${delay}ms`,
      }}>
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
  );
};

export default FeatureCard;
