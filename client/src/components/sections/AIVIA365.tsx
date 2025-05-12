import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ui/ContactForm";

type AIProduct = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: {
    from: string;
    to: string;
    accent: string;
  };
  features: string[];
  position: {
    left: string;
    top: string;
  };
  delay: string;
};

export function AIVIA365Section() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState("AIVIA365");
  const detailsRef = useRef<HTMLDivElement>(null);

  // Close details panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        setIsDetailOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Products data
  const products: AIProduct[] = [
    {
      id: "finai",
      name: "FinAI",
      description: "Advanced financial management and forecasting with AI-powered insights.",
      icon: (
        <svg className="w-6 h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: {
        from: "from-blue-700",
        to: "to-blue-900",
        accent: "bg-blue-600/30",
      },
      features: [
        "Automated financial reporting",
        "Cash flow predictions",
        "Budget optimization",
        "Investment analysis",
        "Expense categorization"
      ],
      position: {
        left: "15%",
        top: "30%"
      },
      delay: "0s"
    },
    {
      id: "haire",
      name: "hAIre",
      description: "Streamline your HR processes with AI-powered recruitment and talent management.",
      icon: (
        <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: {
        from: "from-purple-700",
        to: "to-purple-900",
        accent: "bg-purple-600/30",
      },
      features: [
        "Resume screening automation",
        "Candidate matching",
        "Employee sentiment analysis",
        "Personalized learning paths",
        "Performance analytics"
      ],
      position: {
        left: "50%",
        top: "10%"
      },
      delay: "0.8s"
    },
    {
      id: "sentinelai",
      name: "SentinelAI",
      description: "AI-powered customer support automation that resolves issues efficiently.",
      icon: (
        <svg className="w-6 h-6 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
      color: {
        from: "from-red-700",
        to: "to-red-900",
        accent: "bg-red-600/30",
      },
      features: [
        "24/7 AI customer support",
        "Multi-language support",
        "Ticket prioritization",
        "Sentiment analysis",
        "Automated escalation"
      ],
      position: {
        left: "85%",
        top: "30%"
      },
      delay: "1.2s"
    },
    {
      id: "prodai",
      name: "ProdAI",
      description: "Boost team productivity with AI-powered project management and collaboration.",
      icon: (
        <svg className="w-6 h-6 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      color: {
        from: "from-green-700",
        to: "to-green-900",
        accent: "bg-green-600/30",
      },
      features: [
        "Smart task prioritization",
        "Risk assessment",
        "Resource optimization",
        "Automated status reporting",
        "Sprint planning assistance"
      ],
      position: {
        left: "15%",
        top: "70%"
      },
      delay: "1.5s"
    },
    {
      id: "aika",
      name: "AIKA",
      description: "Your organization's AI Knowledge Agent that provides instant answers to company questions.",
      icon: (
        <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      color: {
        from: "from-amber-700",
        to: "to-amber-900",
        accent: "bg-amber-600/30",
      },
      features: [
        "Knowledge base integration",
        "Natural language querying",
        "Document summarization",
        "Cross-department insights",
        "Learning from user interactions"
      ],
      position: {
        left: "85%",
        top: "70%"
      },
      delay: "2s"
    },
    {
      id: "campai",
      name: "CampAI",
      description: "AI-powered marketing automation that optimizes campaigns and increases conversion.",
      icon: (
        <svg className="w-6 h-6 text-pink-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: {
        from: "from-pink-700",
        to: "to-pink-900",
        accent: "bg-pink-600/30",
      },
      features: [
        "Content generation",
        "A/B testing automation",
        "Customer segmentation",
        "Campaign optimization",
        "ROI prediction"
      ],
      position: {
        left: "50%",
        top: "85%"
      },
      delay: "1.7s"
    }
  ];
  
  const getProductById = (id: string) => products.find(p => p.id === id);
  
  const handleProductClick = (id: string) => {
    setSelectedProduct(id);
    setIsDetailOpen(true);
  };
  return (
    <section id="aivia365" className="py-20 relative overflow-hidden bg-gradient-to-b from-lavender-light/20 to-purple-light/30">
      {/* Robot hand background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/60 to-purple-light/80 z-10"></div>
        <img 
          src="/images/robot-hand.jpg" 
          alt="AI Robot Hand" 
          className="absolute object-cover w-full h-full opacity-30" 
        />
      </div>
      {/* Neural network background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="neural-net" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-net)" />
            {/* Neural connections */}
            <g className="neural-lines">
              <line x1="10%" y1="30%" x2="30%" y2="60%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5" />
              <line x1="20%" y1="40%" x2="40%" y2="30%" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="0.5" />
              <line x1="50%" y1="20%" x2="70%" y2="40%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
              <line x1="60%" y1="50%" x2="80%" y2="30%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5" />
              <line x1="10%" y1="70%" x2="30%" y2="90%" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="0.5" />
              <line x1="40%" y1="60%" x2="60%" y2="80%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
              <line x1="70%" y1="70%" x2="90%" y2="50%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5" />
            </g>
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-lavender via-purple-500 to-blue flex items-center justify-center shadow-lg shadow-purple-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M12 2v2" />
                  <path d="M12 14v8" />
                  <path d="M9 18h6" />
                  <path d="M15 13.5a3.5 3.5 0 0 0-3 5.5" />
                  <path d="M9 13.5a3.5 3.5 0 0 1 3 5.5" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">AIVIA365</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            UnifAIed AI Ecosystem for Every Function in Your Organization
          </p>
        </div>

        {/* Animated Product Circle */}
        <div className="relative mx-auto mb-20" style={{ maxWidth: "1000px", height: "500px" }}>
          {/* Center circle - AIVIA365 */}
          <div className={`absolute rounded-full bg-gradient-to-tr from-lavender-dark to-blue-dark w-48 h-48 flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-purple-500/20 z-20 border-2 ${selectedProduct ? 'border-white/50' : 'border-lavender-light/30'} overflow-hidden transition-all duration-500 ${selectedProduct ? 'scale-110' : ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent ${selectedProduct ? 'animate-spin-slow' : ''}`} style={{ animationDuration: "10s" }}></div>
            <div className={`absolute inset-0 rounded-full ${selectedProduct ? 'bg-gradient-radial from-purple-600/20 via-transparent to-transparent animate-pulse-fast' : ''}`}></div>
            <div className={`text-center p-4 relative ${selectedProduct ? 'animate-pulse-gentle' : ''}`}>
              <div className="relative mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-14 h-14 mx-auto ${selectedProduct ? 'animate-spin-slow' : ''}`} style={{ animationDuration: "15s" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse ${selectedProduct ? 'animate-ping-slow' : ''}`}>
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold relative z-10">AIVIA 365</h3>
              <p className="text-blue-100 text-xs mt-1 relative z-10">Unified AI Suite</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" style={{ animationDuration: "3s" }}></div>
          </div>

          {/* Orbiting Products */}
          {/* Map through products to render them */}
          {products.map((product) => (
            <div 
              key={product.id}
              className="absolute w-44 h-44 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-float" 
              style={{ 
                left: product.position.left, 
                top: product.position.top,
                animationDelay: product.delay 
              }}
            >
              <button 
                onClick={() => handleProductClick(product.id)}
                className={`absolute w-full h-full rounded-lg bg-gradient-to-br ${product.color.from} ${product.color.to} flex flex-col items-center justify-center p-4 border ${selectedProduct === product.id ? 'border-white' : 'border-opacity-20'} shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer group ${selectedProduct === product.id ? 'animate-highlight scale-110 z-30' : ''}`}
                aria-label={`Learn more about ${product.name}`}
              >
                <div className={`${product.color.accent} w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110`}>
                  {product.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{product.name}</h3>
                <p className="text-white/80 text-sm text-center mt-1">
                  {product.id === 'finai' ? 'Financial AI' : 
                   product.id === 'haire' ? 'HR AI Tool' : 
                   product.id === 'sentinelai' ? 'Security AI' : 
                   product.id === 'prodai' ? 'Productivity AI' : 
                   product.id === 'aika' ? 'Knowledge AI' : 
                   product.id === 'campai' ? 'Marketing AI' : ''}
                </p>
                {product.id === 'aika' && <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Beta</span>}
              </button>
            </div>
          ))}
          
          {/* Product Detail Panel */}
          {isDetailOpen && selectedProduct && (
            <div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[90vw] bg-white rounded-xl shadow-2xl z-30 animate-fadeIn overflow-hidden"
              ref={detailsRef}
            >
              {(() => {
                const product = getProductById(selectedProduct);
                if (!product) return null;
                
                return (
                  <>
                    <div className={`bg-gradient-to-r ${product.color.from} ${product.color.to} p-6 relative`}>
                      <button 
                        onClick={() => setIsDetailOpen(false)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all hover:bg-white/40"
                        aria-label="Close panel"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      <div className="flex items-center">
                        <div className={`${product.color.accent} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                          <div className="scale-150">
                            {product.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                          <p className="text-white/90 text-sm">
                            {product.id === 'finai' ? 'Financial AI' : 
                             product.id === 'haire' ? 'HR AI Tool' : 
                             product.id === 'sentinelai' ? 'Security AI' : 
                             product.id === 'prodai' ? 'Productivity AI' : 
                             product.id === 'aika' ? 'Knowledge AI' : 
                             product.id === 'campai' ? 'Marketing AI' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">{product.description}</p>
                      
                      <h4 className="text-gray-800 font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className={`w-5 h-5 text-${product.id === 'finai' ? 'blue' : product.id === 'haire' ? 'purple' : product.id === 'sentinelai' ? 'red' : product.id === 'prodai' ? 'green' : product.id === 'aika' ? 'amber' : 'pink'}-600 mr-2 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-end mt-8">
                        <button className={`mr-3 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors`}>
                          Learn More
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            const prod = getProductById(selectedProduct || "");
                            if (prod) {
                              setSelectedProductForDemo(prod.name);
                            }
                            setIsDetailOpen(false);
                            setShowDemoForm(true);
                          }}
                          className={`px-5 py-2 rounded-lg bg-gradient-to-r ${product.color.from} ${product.color.to} text-white shadow-md hover:shadow-lg transition-all`}
                        >
                          Request Demo
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
          
          {/* Overlay when detail is open */}
          {isDetailOpen && (
            <div 
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 animate-fadeIn"
              onClick={() => setIsDetailOpen(false)}
            ></div>
          )}

          {/* Connecting lines */}
          <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Regular lines */}
            <path 
              d="M500 250 L150 150" 
              stroke="url(#blue-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "finai" ? "pulse-line" : ""}
            />
            <path 
              d="M500 250 L500 50" 
              stroke="url(#purple-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "haire" ? "pulse-line" : ""}
            />
            <path 
              d="M500 250 L850 150" 
              stroke="url(#red-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "sentinelai" ? "pulse-line" : ""}
            />
            <path 
              d="M500 250 L150 350" 
              stroke="url(#green-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "prodai" ? "pulse-line" : ""}
            />
            <path 
              d="M500 250 L850 350" 
              stroke="url(#amber-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "aika" ? "pulse-line" : ""}
            />
            <path 
              d="M500 250 L500 450" 
              stroke="url(#pink-gradient)" 
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              className={selectedProduct === "campai" ? "pulse-line" : ""}
            />
            
            {/* Always visible connecting lines for all products */}
            <path 
              d="M500 250 L150 150" 
              stroke="rgba(37, 99, 235, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            <path 
              d="M500 250 L500 50" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            <path 
              d="M500 250 L850 150" 
              stroke="rgba(220, 38, 38, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            <path 
              d="M500 250 L150 350" 
              stroke="rgba(22, 163, 74, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            <path 
              d="M500 250 L850 350" 
              stroke="rgba(217, 119, 6, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            <path 
              d="M500 250 L500 450" 
              stroke="rgba(190, 24, 93, 0.2)" 
              strokeWidth="1" 
              strokeDasharray="3,3" 
              className="opacity-40"
            />
            
            {/* Animated connection for selected product */}
            {selectedProduct === "finai" && (
              <path 
                d="M500 250 L150 150" 
                stroke="url(#blue-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            {selectedProduct === "haire" && (
              <path 
                d="M500 250 L500 50" 
                stroke="url(#purple-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            {selectedProduct === "sentinelai" && (
              <path 
                d="M500 250 L850 150" 
                stroke="url(#red-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            {selectedProduct === "prodai" && (
              <path 
                d="M500 250 L150 350" 
                stroke="url(#green-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            {selectedProduct === "aika" && (
              <path 
                d="M500 250 L850 350" 
                stroke="url(#amber-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            {selectedProduct === "campai" && (
              <path 
                d="M500 250 L500 450" 
                stroke="url(#pink-animated)" 
                strokeWidth="3" 
                className="animate-dash"
              />
            )}
            
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be185d" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="0.8" />
              </linearGradient>
              
              {/* Animated gradients for selected products */}
              <linearGradient id="blue-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="purple-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="1" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="red-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="1" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="green-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" stopOpacity="1" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="amber-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="1" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="pink-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be185d" stopOpacity="1" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Product suite intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Transform Your Organization with AI
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            AIVIA365 is a comprehensive suite of AI-powered tools designed to enhance productivity 
            and drive innovation across every department of your organization.
          </p>
          <div className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-[2px]">
            <button 
              onClick={() => {
                setSelectedProductForDemo("AIVIA365 Suite");
                setShowDemoForm(true);
              }}
              className="px-6 py-2 bg-white/80 hover:bg-white rounded-full text-gray-800 font-medium hover:shadow-md transition-all"
            >
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/60 backdrop-blur-sm border border-purple-300/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Increased Efficiency</h3>
            <p className="text-gray-600">Automate routine tasks and optimize workflows with AI-powered assistance across all departments.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm border border-blue-300/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Seamless Integration</h3>
            <p className="text-gray-600">All AIVIA365 tools work together seamlessly, sharing data and insights across your organization.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm border border-indigo-300/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Data-Driven Insights</h3>
            <p className="text-gray-600">Leverage advanced analytics and machine learning to uncover valuable insights and make informed decisions.</p>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-0">
        <div className="absolute left-0 bottom-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="fill-purple-500/30"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,102.1,22.85,168.3,38.84,25.50,6.16,52.95,11.59,80.25,11.73,87.44.44,171.23-39.7,255.42-53.35A440.28,440.28,0,0,1,1400,20.48V0Z"
              opacity=".5" className="fill-indigo-500/30"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-blue-600/20"
            ></path>
          </svg>
        </div>
      </div>

      {/* Demo Request Modal */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Schedule a Demo for {selectedProductForDemo}</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below and our team will contact you to schedule a personalized demo of {selectedProductForDemo}.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ContactForm isDemoRequest={true} productName={selectedProductForDemo} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}