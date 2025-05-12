import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatMessage {
  sender: "human" | "ai";
  content: string;
  avatar: string;
}

export function AikaChat({ className }: { className?: string }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "human",
      content: "How many employees work in the engineering department?",
      avatar: "AI",
    },
    {
      sender: "ai",
      content: "Currently, there are 37 employees in the engineering department across 3 teams.",
      avatar: "AK",
    },
    {
      sender: "human",
      content: "What's the timeline for the Quantum project?",
      avatar: "AI",
    },
    {
      sender: "ai",
      content: "The Quantum project is scheduled for completion by Q3 2023. Current status is in development phase (75% complete).",
      avatar: "AK",
    },
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, {
      sender: "human",
      content: input,
      avatar: "AI"
    }]);
    
    setInput("");
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-md gradient-bg flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="ml-2 font-medium">AIKA Knowledge Agent</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-light"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-light"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-light"></div>
        </div>
      </div>
      
      <div className="p-5 bg-gray-lightest">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={cn(
              "flex mb-4", 
              message.sender === "ai" ? "justify-end" : ""
            )}
          >
            {message.sender === "human" && (
              <div className="w-8 h-8 rounded-full bg-lavender-light flex items-center justify-center text-white">
                <span className="text-xs font-bold">{message.avatar}</span>
              </div>
            )}
            
            <div className={cn(
              "mx-3 p-3 rounded-lg shadow-sm max-w-xs",
              message.sender === "human" 
                ? "bg-white" 
                : "bg-lavender bg-opacity-10"
            )}>
              <p className="text-sm">{message.content}</p>
            </div>
            
            {message.sender === "ai" && (
              <div className="w-8 h-8 rounded-full bg-blue-light flex items-center justify-center text-white">
                <span className="text-xs font-bold">{message.avatar}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-4 flex items-center border-t border-gray-100">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AIKA anything about your company..."
          className="w-full bg-gray-lightest rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-light"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <Button 
          onClick={handleSendMessage}
          className="ml-2 p-2 rounded-lg bg-lavender text-white"
          size="icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </Card>
  );
}
