import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ui/ContactForm";

export function CallToAction() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  
  return (
    <>
      <section id="cta" className="py-20 relative overflow-hidden bg-gray-dark text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender to-blue opacity-20"></div>
          <div className="network-bg opacity-40 absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-200">
              Join the companies already using AIKA to unify their knowledge and boost productivity. Schedule a demo today and see the power of AI-driven knowledge management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-blue-light text-white hover:bg-blue px-8 py-6 font-semibold shadow-md"
                onClick={() => setShowDemoForm(true)}
              >
                Schedule a Demo
              </Button>
              <Button className="bg-lavender text-white hover:bg-lavender-dark border-0 px-8 py-6 font-semibold shadow-md"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule Demo Modal */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Schedule a Demo</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below and our team will contact you to schedule a personalized demo of AIKA.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ContactForm isDemoRequest={true} productName="AIKA" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
