import React from "react";

interface FounderQuoteProps {
  className?: string;
}

export function FounderQuote({ className }: FounderQuoteProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <h3 className="text-2xl font-bold font-poppins mb-6 text-center">From the Founder's Desk</h3>
      <div className="rounded-xl p-6 bg-lavender-light shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mr-4 mb-4 sm:mb-0">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img 
                src="/joseph-chris.jpg" 
                alt="Joseph Chris" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-800">Joseph Chris <span className="text-gray-500 font-normal">@i_josephchris • aivia365.com</span></p>
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              "I founded AIVIA365 with a simple but bold vision: to harness the power of AI to transform how businesses operate. We are not just building tools — we are building a platform that empowers teams to unlock new levels of efficiency, creativity, and growth."
            </p>
            <p className="mt-3 text-gray-500 text-sm">Founder & CEO, AIVIA365</p>
          </div>
        </div>
      </div>
    </div>
  );
}