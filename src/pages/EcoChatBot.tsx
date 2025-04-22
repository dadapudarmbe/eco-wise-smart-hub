
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EcoChatBot = () => {
  const chatbotUrl = "https://bot-ughd.onrender.com";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 eco-container">
          <div className="mb-6">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-8 w-8 text-eco-green" />
              <h1 className="eco-heading">EcoChat Bot</h1>
            </div>
          </div>
          
          <p className="text-center mb-12 eco-text max-w-2xl mx-auto">
            Get instant answers to your sustainability questions from our specialized eco-friendly chatbot.
          </p>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-eco-blue">Chat with EcoWise Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-video w-full">
                <iframe 
                  src={chatbotUrl}
                  className="w-full h-full border-0 rounded-lg"
                  allow="microphone; camera"
                  title="EcoChat Bot"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <h3 className="eco-subheading">Common Questions</h3>
                <ul className="list-disc pl-5 space-y-3 mt-4">
                  <li className="eco-text">How do I properly recycle plastic bottles?</li>
                  <li className="eco-text">What are the benefits of composting?</li>
                  <li className="eco-text">How can I reduce my carbon footprint?</li>
                  <li className="eco-text">What items should never be put in recycling bins?</li>
                  <li className="eco-text">How do I dispose of electronic waste?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EcoChatBot;
