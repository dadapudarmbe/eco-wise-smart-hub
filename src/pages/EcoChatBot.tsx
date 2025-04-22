
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EcoChatBot = () => {
  // This URL will be replaced with your actual chatbot URL
  const chatbotUrl = "https://your-chatbot-url.com";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 eco-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-eco-green" />
            <h1 className="eco-heading">EcoChat Bot</h1>
          </div>
          
          <p className="text-center mb-12 eco-text max-w-2xl mx-auto">
            Get instant answers to your sustainability questions from our specialized eco-friendly chatbot.
          </p>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-eco-blue">Chat with EcoWise Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="eco-text text-center">
                  External chatbot integration will be loaded here.
                  Replace the iframe src with your actual chatbot URL.
                </p>
              </div>
              
              <div className="aspect-video w-full">
                {/* This iframe will be replaced with your actual chatbot integration */}
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center p-4">
                    <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Chatbot integration placeholder</p>
                    <p className="text-sm text-muted-foreground">
                      Replace with your chatbot URL:<br />
                      <code className="bg-background p-1 rounded text-xs">{chatbotUrl}</code>
                    </p>
                  </div>
                </div>
                
                {/* Uncomment and update with your actual chatbot URL */}
                {/* <iframe 
                  src={chatbotUrl}
                  className="w-full h-full border-0 rounded-lg"
                  allow="microphone; camera"
                  title="EcoChat Bot"
                ></iframe> */}
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
