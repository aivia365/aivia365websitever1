import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  textClassName?: string;
}

export function Logo({ className, size = "md", textClassName }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", // Increased for better visibility
    lg: "h-16",
  };

  // In a Vite project, we can import images directly from the /src directory
  // or reference them from the public directory with a leading slash
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/assets/aivia-logo-full.png" 
        alt="AIVIA365 Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
    </div>
  );
}
