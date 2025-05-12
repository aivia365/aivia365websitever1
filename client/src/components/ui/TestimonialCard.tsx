import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarColor: string;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  initials,
  avatarColor,
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105", className)}>
      <div className="flex text-lavender mb-4">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-6">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white mr-3", avatarColor)}>
          <span className="font-semibold">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray">{role}</p>
        </div>
      </div>
    </div>
  );
}
