import { useState } from "react";
import { AikaDemo } from "@/components/ui/AikaDemo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ui/ContactForm";

export function AikaDemoSection() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  return (
    <section id="how-it-works" className="py-20 bg-gray-lightest overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-lightest to-white/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            How <span className="gradient-text">AIKA</span> Works
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Watch how AIKA seamlessly answers questions and provides instant access to your company's knowledge
          </p>
        </div>
        
        {/* How it Works - Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-lavender/10 rounded-full flex items-center justify-center text-lavender mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute -left-2 top-1/2 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-lavender-light"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">1. Ask Any Question</h3>
            <p className="text-gray-600">Ask AIKA any question about your company in natural language, just as you would ask a colleague.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative">
            <div className="w-12 h-12 bg-lavender/10 rounded-full flex items-center justify-center text-lavender mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">2. Instant Processing</h3>
            <p className="text-gray-600">AIKA searches through all your company's knowledge sources, finding the most relevant information.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-lavender/10 rounded-full flex items-center justify-center text-lavender mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">3. Get Clear Answers</h3>
            <p className="text-gray-600">Receive concise, accurate answers with sources cited so you can verify the information.</p>
          </div>
        </div>
        
        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 lg:order-1">
            <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Intuitive Knowledge Access</h3>
              <p className="text-gray-700 mb-6">
                AIKA understands natural language questions and instantly retrieves the most relevant information from your company's knowledge base.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-lavender flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Instant Answers</h4>
                    <p className="text-gray-600">Get immediate responses to questions about company policies, procedures, and information.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-lavender flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Contextual Understanding</h4>
                    <p className="text-gray-600">AIKA remembers conversation context and provides relevant follow-up information.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-lavender flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Source Citations</h4>
                    <p className="text-gray-600">Every answer includes references to the original source documents for verification.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={() => setShowDemoForm(true)}
                  className="bg-lavender hover:bg-lavender-dark text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
                >
                  Schedule a Personalized Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="transform transition-all duration-500 hover:scale-105">
              <AikaDemo className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
        
        {/* Centered CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 p-[2px] rounded-lg">
            <Button 
              variant="outline"
              onClick={() => setShowDemoForm(true)}
              className="bg-white text-gray-800 hover:bg-gray-50 border-0 font-medium px-8 py-3"
            >
              Get Started with AIKA
            </Button>
          </div>
        </div>
      </div>
      
      {/* Demo Request Modal */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Schedule a Demo of AIKA</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below and our team will contact you to schedule a personalized demo of AIKA for your organization.
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