import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Camera, MessageCircle, Lightbulb, Leaf, TreeDeciduous } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const featureCards = [
  {
    title: "Waste Classification",
    description: "Upload or capture images of waste items for instant classification and proper disposal guidance.",
    icon: Camera,
    link: "/waste-classification",
    iconColor: "text-eco-green",
  },
  {
    title: "EcoChat Bot",
    description: "Get instant answers to your sustainability questions from our specialized eco-friendly chatbot.",
    icon: MessageCircle,
    link: "/eco-chatbot",
    iconColor: "text-eco-blue",
  },
  {
    title: "Energy Tracker",
    description: "Monitor your energy consumption with insightful visualizations and receive tips to reduce usage.",
    icon: Lightbulb,
    link: "/energy-tracker",
    iconColor: "text-eco-earth",
  },
  {
    title: "Recycling Centers",
    description: "Discover recycling centers near you and learn about their accepted materials and operating hours.",
    icon: Recycle,
    link: "/recycling-centers",
    iconColor: "text-eco-blue-dark",
  },
];

const Index = () => {
  const shuffledFeatures = React.useMemo(() => shuffle(featureCards), []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-eco-green-light to-eco-blue py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to EcoWise Smart Hub
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your all-in-one solution for sustainable living and waste management
            </motion.p>
          </div>
        </section>

        <section className="py-16 eco-container">
          <h2 className="eco-heading text-center mb-12">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shuffledFeatures.map((feature, idx) => (
              <FeatureCard 
                key={feature.title}
                {...feature}
                delay={120 * idx}
              />
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-eco-green-light to-eco-blue-light overflow-hidden relative">
          <div className="container mx-auto px-4 min-h-[400px] relative">
            <motion.div
              className="absolute right-10 top-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Leaf className="w-16 h-16 text-eco-green" />
            </motion.div>

            <motion.div
              className="absolute left-1/4 top-20"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <TreeDeciduous className="w-20 h-20 text-eco-earth" />
            </motion.div>

            <motion.div
              className="absolute right-1/3 bottom-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Recycle className="w-24 h-24 text-eco-blue" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white relative z-10 pt-20"
            >
              <h2 className="text-4xl font-bold mb-6">Join the Green Revolution</h2>
              <p className="text-xl max-w-2xl mx-auto">
                Together, we can make a difference. Every small action counts towards
                a more sustainable future.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
