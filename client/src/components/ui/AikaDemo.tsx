import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SalesKpiDashboard } from "./SalesKpiDashboard";

// Simplified static chat demo component
// No animation or auto-typing for reliability
interface AikaDemoProps {
  className?: string;
}

// Define a custom chat message type for our demo
type ChatMessage = {
  sender: "human" | "ai";
  content: React.ReactNode;
  avatar: string;
}

export function AikaDemo({ className }: AikaDemoProps) {
  // Use a simple static conversation for demo purposes
  const demoConversation: ChatMessage[] = [
    {
      sender: "human",
      content: "How many leaves are left for me in FY2024-25?",
      avatar: "AI"
    },
    {
      sender: "ai",
      content: "Based on your employment records, you have 14 vacation days and 5 sick days remaining for FY2024-25. Your anniversary bonus leave of 2 days will be credited next month. Please note that 7 of your vacation days must be used before December 31st as they don't roll over to the next calendar year.",
      avatar: "AK"
    },
    {
      sender: "human",
      content: "Can I have a visual representation of my major sales KPI's for the last 2 years?",
      avatar: "AI"
    },
    {
      sender: "ai",
      content: (
        <div>
          <div className="mb-2">I've generated a visualization of your key sales metrics for FY2023-24 and FY2024-25:</div>
          <SalesKpiDashboard />
          <div className="mt-2">Would you like me to send this report to your email?</div>
        </div>
      ),
      avatar: "AK"
    },
    {
      sender: "human",
      content: "What is the status of Current Healthcare project our company is working on?",
      avatar: "AI"
    },
    {
      sender: "ai",
      content: "The Healthcare Analytics Platform project is currently in Phase 2 of development (70% complete). The machine learning models have been successfully trained with 93% accuracy. Integration testing with the client's existing systems begins next week. The project is on track to meet the June 15th delivery date, and the budget utilization is at 65%, which is within planned parameters.",
      avatar: "AK"
    }
  ];

  return (
    <Card className={cn("overflow-hidden border-2 border-lavender-light shadow-xl", className)}>
      {/* Chat header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-lavender-light to-blue-light text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-lavender font-bold">
            A
          </div>
          <span className="ml-2 font-medium text-lg">AIKA Knowledge Agent</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-2.5 h-2.5 rounded-full bg-white/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/70"></div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="p-5 bg-gray-lightest h-80 overflow-y-auto">
        {demoConversation.map((message, index) => (
          <div 
            key={index}
            className={cn(
              "flex mb-4", 
              message.sender === "ai" ? "justify-start" : "justify-end"
            )}
          >
            {message.sender === "ai" && (
              <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center text-white">
                <span className="text-xs font-bold">{message.avatar}</span>
              </div>
            )}
            
            <div className={cn(
              "mx-3 p-3 rounded-lg shadow-sm max-w-xs lg:max-w-md",
              message.sender === "ai" 
                ? "bg-white" 
                : "bg-lavender text-white"
            )}>
              <div className="text-sm">{message.content}</div>
            </div>
            
            {message.sender === "human" && (
              <div className="w-8 h-8 rounded-full bg-blue-light flex items-center justify-center text-white">
                <span className="text-xs font-bold">{message.avatar}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Input area */}
      <div className="p-4 flex items-center border-t border-gray-100">
        <Input
          type="text"
          placeholder="Hello chief, what are you exploring today?"
          className="w-full bg-gray-lightest rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-light"
          disabled={true}
        />
        <Button 
          className="ml-2 p-2 rounded-lg bg-lavender text-white hover:bg-lavender-dark"
          size="icon"
          disabled={true}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </Card>
  );
}