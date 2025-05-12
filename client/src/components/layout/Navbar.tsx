import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#home" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("how-it-works");
              }}
            >
              How it Works
            </a>
            <a 
              href="#aivia365" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("aivia365");
              }}
            >
              AIVIA365
            </a>

            <a 
              href="#pricing" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("pricing");
              }}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray hover:text-lavender font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("faq");
              }}
            >
              FAQ
            </a>
            <Button 
              className="bg-white hover:bg-gray-100 text-lavender border border-lavender ml-4"
              onClick={() => setLocation("/auth")}
            >
              Login
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-dark hover:text-lavender" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={cn("md:hidden bg-white", isMobileMenuOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-4 py-4">
            <a 
              href="#home" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("how-it-works");
              }}
            >
              How it Works
            </a>
            <a 
              href="#aivia365" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("aivia365");
              }}
            >
              AIVIA365
            </a>

            <a 
              href="#pricing" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("pricing");
              }}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray hover:text-lavender font-medium px-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("faq");
              }}
            >
              FAQ
            </a>
            <div className="px-4 mt-2">
              <Button 
                className="bg-white hover:bg-gray-100 text-lavender border border-lavender w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setLocation("/auth");
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
