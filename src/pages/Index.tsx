
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Camera, MessageCircle, Lightbulb } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Features Section */}
        <section className="py-16 eco-container">
          <h2 className="eco-heading text-center mb-12">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Waste Classification" 
              description="Upload or capture images of waste items for instant classification and proper disposal guidance."
              icon={Camera}
              link="/waste-classification"
              iconColor="text-eco-green"
              delay={100}
            />
            
            <FeatureCard 
              title="EcoChat Bot" 
              description="Get instant answers to your sustainability questions from our specialized eco-friendly chatbot."
              icon={MessageCircle}
              link="/eco-chatbot"
              iconColor="text-eco-blue"
              delay={200}
            />
            
            <FeatureCard 
              title="Energy Tracker" 
              description="Monitor your energy consumption with insightful visualizations and receive tips to reduce usage."
              icon={Lightbulb}
              link="/energy-tracker"
              iconColor="text-eco-earth"
              delay={300}
            />
            
            <FeatureCard 
              title="Recycling Centers" 
              description="Discover recycling centers near you and learn about their accepted materials and operating hours."
              icon={Recycle}
              link="/recycling-centers"
              iconColor="text-eco-blue-dark"
              delay={400}
            />
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="eco-heading text-center mb-12">Our Environmental Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg">
                <div className="text-4xl font-bold text-eco-green mb-4">2,500+</div>
                <p className="text-lg">Waste Items Classified</p>
              </div>
              
              <div className="p-6 rounded-lg">
                <div className="text-4xl font-bold text-eco-blue mb-4">15%</div>
                <p className="text-lg">Average Energy Savings</p>
              </div>
              
              <div className="p-6 rounded-lg">
                <div className="text-4xl font-bold text-eco-earth mb-4">500+</div>
                <p className="text-lg">Recycling Centers Listed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
