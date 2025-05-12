import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AikaChat } from "@/components/ui/AikaChat";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ui/ContactForm";

export function Hero() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-lightest z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto py-14 px-4 text-center">
          {/* Purple banner at top */}
          <div className="inline-block bg-lavender/10 rounded-full px-5 py-2 mb-6">
            <p className="text-lavender text-sm font-medium">
              Introducing AIKA - AI Knowledge Agent from AIVIA
            </p>
          </div>
          
          {/* Main heading with two-part styling */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            <span className="text-gray-900">Your Organization's</span>
            <br />
            <span className="text-lavender">AI-Powered Knowledge Hub</span>
          </h1>
          
          {/* Subheading text */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Reduce app switching, improve productivity, and unlock your
            company's knowledge with a single AI agent that understands your
            business inside out.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              onClick={() => setShowDemoForm(true)}
              className="bg-lavender hover:bg-lavender-dark text-white px-8 py-6"
            >
              Request Early Access
            </Button>
            <Button 
              onClick={() => window.location.href = "#how-it-works"}
              variant="outline" 
              className="border border-lavender text-lavender hover:bg-lavender/10 px-8 py-6"
            >
              Watch Demo <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Request Early Access to AIKA</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below to be among the first to experience AIKA for your organization.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ContactForm isDemoRequest={true} productName="AIKA" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
