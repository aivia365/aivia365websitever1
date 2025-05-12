import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, benefits, className }: FeatureCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105", className)}>
      <div className="h-3 gradient-bg"></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg gradient-bg mb-4 flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lavender mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
