
import React, { useState, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WasteClassification = () => {
  const [image, setImage] = useState<string | null>(null);
  const [classificationResult, setClassificationResult] = useState<string | null>(null);
  const [isClassifying, setIsClassifying] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Function to handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setClassificationResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Failed to access camera. Please check your permissions.");
    }
  };

  // Function to stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  // Function to capture image from camera
  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setImage(dataUrl);
        setClassificationResult(null);
        stopCamera();
      }
    }
  };

  // Function to classify waste
  const classifyWaste = async () => {
    if (!image) {
      toast.error("Please upload or capture an image first");
      return;
    }

    setIsClassifying(true);
    
    try {
      // This is where you would integrate your model
      // For now, we'll simulate a classification result
      setTimeout(() => {
        const wasteTypes = ["Plastic", "Paper", "Glass", "Metal", "Organic", "Electronic"];
        const result = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
        setClassificationResult(result);
        setIsClassifying(false);
        toast.success("Waste classified successfully!");
      }, 2000);

      // When you're ready to add your model, uncomment and update this code
      /*
      // TODO: Add waste classification model integration here
      // const model = await tf.loadLayersModel('YOUR_MODEL_URL');
      // const tensor = await preprocessImage(image);
      // const prediction = await model.predict(tensor);
      // const result = decodeResult(prediction);
      // setClassificationResult(result);
      */
    } catch (error) {
      console.error("Classification error:", error);
      toast.error("Failed to classify waste. Please try again.");
      setIsClassifying(false);
    }
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setImage(null);
    setClassificationResult(null);
    if (value === "camera") {
      startCamera();
    } else {
      stopCamera();
    }
  };

  // Clean up camera on unmount
  React.useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 eco-container">
          <h1 className="eco-heading text-center">Waste Classification</h1>
          <p className="text-center mb-8 eco-text max-w-2xl mx-auto">
            Upload or capture an image of waste items to get instant classification and proper disposal guidance.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="upload" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upload" className="text-lg py-3">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Image
                </TabsTrigger>
                <TabsTrigger value="camera" className="text-lg py-3">
                  <Camera className="mr-2 h-5 w-5" />
                  Real-time Capture
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div 
                        className="border-4 border-dashed border-muted rounded-lg p-8 w-full max-w-md h-64 mb-6 flex flex-col justify-center items-center cursor-pointer hover:bg-muted/20 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {image ? (
                          <img 
                            src={image} 
                            alt="Uploaded waste" 
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <div className="text-center">
                            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">Click to upload an image or drag and drop</p>
                            <p className="text-sm text-muted-foreground mt-1">PNG, JPG, JPEG up to 10MB</p>
                          </div>
                        )}
                      </div>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleFileUpload} 
                      />
                      <Button 
                        className="bg-eco-green hover:bg-eco-green-dark"
                        onClick={classifyWaste}
                        disabled={!image || isClassifying}
                      >
                        {isClassifying ? "Classifying..." : "Classify Waste"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="camera" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="border-4 border-dashed border-muted rounded-lg p-2 w-full max-w-md h-64 mb-6 overflow-hidden">
                        {image ? (
                          <img 
                            src={image} 
                            alt="Captured waste" 
                            className="max-h-full max-w-full object-contain mx-auto"
                          />
                        ) : (
                          <video 
                            ref={videoRef} 
                            autoPlay 
                            playsInline 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      <div className="flex space-x-4">
                        {image ? (
                          <>
                            <Button 
                              variant="outline" 
                              onClick={() => {
                                setImage(null);
                                startCamera();
                              }}
                            >
                              Retake
                            </Button>
                            <Button 
                              className="bg-eco-green hover:bg-eco-green-dark"
                              onClick={classifyWaste}
                              disabled={isClassifying}
                            >
                              {isClassifying ? "Classifying..." : "Classify Waste"}
                            </Button>
                          </>
                        ) : (
                          <Button 
                            className="bg-eco-green hover:bg-eco-green-dark"
                            onClick={captureImage}
                          >
                            Capture
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {classificationResult && (
              <div className="mt-8 animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="eco-subheading text-center mb-4">Classification Result</h2>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-eco-blue mb-4">
                        {classificationResult}
                      </div>
                      <p className="mb-4">
                        This item should be disposed of in the <span className="font-semibold">{classificationResult.toLowerCase()}</span> waste bin.
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Disposal Instructions:</h3>
                        <p className="text-sm eco-text">
                          {classificationResult === "Plastic" && "Rinse the plastic item before recycling. Check for recycling number at the bottom."}
                          {classificationResult === "Paper" && "Flatten cardboard boxes. Remove any plastic windows or metal fasteners."}
                          {classificationResult === "Glass" && "Rinse glass containers. Remove caps and lids before recycling."}
                          {classificationResult === "Metal" && "Rinse metal containers. Separate different metal types if possible."}
                          {classificationResult === "Organic" && "Compost food scraps and yard waste. Keep meat and dairy products out of compost."}
                          {classificationResult === "Electronic" && "Take to an e-waste recycling center. Do not dispose in regular trash."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WasteClassification;
