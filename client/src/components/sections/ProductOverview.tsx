import { Button } from "@/components/ui/button";

export function ProductOverview() {
  return (
    <section id="products" className="py-16 bg-gray-lightest">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Meet <span className="gradient-text">AIKA</span>
          </h2>
          <p className="text-lg text-gray-700">
            Your AI Knowledge Agent - The internal Wikipedia for your organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center mb-8 overflow-hidden">
            <svg 
              width="400" 
              height="400" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
            >
              {/* Define animations */}
              <defs>
                <linearGradient id="screenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
                
                <linearGradient id="screenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                
                {/* Rotating around robot animation */}
                <animateTransform
                  id="rotateAround"
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="15s"
                  repeatCount="indefinite"
                />
                
                {/* Various screen animations */}
                <animateTransform
                  id="screenRotate1"
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="10s"
                  repeatCount="indefinite"
                />
                
                <animateTransform
                  id="screenRotate2"
                  attributeName="transform"
                  type="rotate"
                  from="90 200 200"
                  to="450 200 200"
                  dur="13s"
                  repeatCount="indefinite"
                />
                
                <animateTransform
                  id="screenRotate3"
                  attributeName="transform"
                  type="rotate"
                  from="180 200 200"
                  to="540 200 200"
                  dur="16s"
                  repeatCount="indefinite"
                />
                
                <animateTransform
                  id="screenRotate4"
                  attributeName="transform"
                  type="rotate"
                  from="270 200 200"
                  to="630 200 200"
                  dur="18s"
                  repeatCount="indefinite"
                />
                
                <animateTransform
                  id="screenRotate5"
                  attributeName="transform"
                  type="rotate"
                  from="45 200 200"
                  to="405 200 200"
                  dur="20s"
                  repeatCount="indefinite"
                />
                
                <animateTransform
                  id="screenRotate6"
                  attributeName="transform"
                  type="rotate"
                  from="135 200 200"
                  to="495 200 200"
                  dur="22s"
                  repeatCount="indefinite"
                />
                
                {/* Hologram filter */}
                <filter id="hologramGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feFlood floodColor="#8B5CF6" floodOpacity="0.5" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>
              
              {/* Rotating screens around robot */}
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate1" />
                <g transform="translate(-200, -200)">
                  {/* Screen 1 */}
                  <g transform="translate(70, 70)">
                    <rect x="0" y="0" width="70" height="50" rx="5" fill="url(#screenGradient1)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="10" x2="60" y2="10" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="20" x2="50" y2="20" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="30" x2="55" y2="30" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate2" />
                <g transform="translate(-200, -200)">
                  {/* Screen 2 */}
                  <g transform="translate(300, 100)">
                    <rect x="0" y="0" width="60" height="45" rx="5" fill="url(#screenGradient2)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="10" x2="50" y2="10" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="30" x2="45" y2="30" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate3" />
                <g transform="translate(-200, -200)">
                  {/* Screen 3 */}
                  <g transform="translate(90, 300)">
                    <rect x="0" y="0" width="80" height="40" rx="5" fill="url(#screenGradient1)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="10" x2="70" y2="10" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="20" x2="60" y2="20" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="30" x2="65" y2="30" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate4" />
                <g transform="translate(-200, -200)">
                  {/* Screen 4 */}
                  <g transform="translate(250, 270)">
                    <rect x="0" y="0" width="75" height="35" rx="5" fill="url(#screenGradient2)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="10" x2="65" y2="10" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="20" x2="55" y2="20" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate5" />
                <g transform="translate(-200, -200)">
                  {/* Screen 5 */}
                  <g transform="translate(320, 190)">
                    <rect x="0" y="0" width="50" height="55" rx="5" fill="url(#screenGradient1)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="15" x2="40" y2="15" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="25" x2="30" y2="25" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="35" x2="35" y2="35" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              <g transform="translate(200, 200)">
                <animateTransform xlinkHref="#screenRotate6" />
                <g transform="translate(-200, -200)">
                  {/* Screen 6 */}
                  <g transform="translate(40, 170)">
                    <rect x="0" y="0" width="55" height="50" rx="5" fill="url(#screenGradient2)" opacity="0.9" filter="url(#hologramGlow)" />
                    <line x1="10" y1="15" x2="45" y2="15" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="25" x2="35" y2="25" stroke="white" strokeWidth="1" opacity="0.8" />
                    <line x1="10" y1="35" x2="40" y2="35" stroke="white" strokeWidth="1" opacity="0.8" />
                  </g>
                </g>
              </g>
              
              {/* Robot head */}
              <ellipse cx="200" cy="130" rx="70" ry="80" fill="#F8F8F8" stroke="#333" strokeWidth="2"/>
              
              {/* Robot eyes */}
              <circle cx="165" cy="120" r="10" fill="#0EA5E9" />
              <circle cx="235" cy="120" r="10" fill="#0EA5E9" />
              <path d="M175 155 Q200 175 225 155" stroke="#333" strokeWidth="2" fill="none"/>
              
              {/* Robot head details */}
              <path d="M165 90 L150 80 L155 70" stroke="#333" fill="none" strokeWidth="1.5"/>
              <path d="M235 90 L250 80 L245 70" stroke="#333" fill="none" strokeWidth="1.5"/>
              <circle cx="155" cy="70" r="3" fill="#0EA5E9" />
              <circle cx="245" cy="70" r="3" fill="#0EA5E9" />

              {/* Robot ear details */}
              <rect x="125" y="120" width="10" height="25" rx="3" fill="#DDD" stroke="#333"/>
              <rect x="265" y="120" width="10" height="25" rx="3" fill="#DDD" stroke="#333"/>
              <circle cx="130" cy="130" r="3" fill="#0EA5E9" />
              <circle cx="270" cy="130" r="3" fill="#0EA5E9" />
              
              {/* Robot neck */}
              <rect x="185" y="210" width="30" height="15" fill="#DDD" stroke="#333"/>
              
              {/* Robot body */}
              <rect x="145" y="225" width="110" height="130" rx="10" fill="#F8F8F8" stroke="#333" strokeWidth="2"/>
              
              {/* Body details */}
              <circle cx="200" cy="255" r="15" fill="#0EA5E9" opacity="0.7" />
              <rect x="175" y="280" width="50" height="5" rx="2" fill="#8B5CF6" opacity="0.7" />
              <rect x="175" y="290" width="50" height="5" rx="2" fill="#8B5CF6" opacity="0.7" />
              <rect x="175" y="300" width="50" height="5" rx="2" fill="#8B5CF6" opacity="0.7" />
              
              {/* Arms */}
              <path d="M145 240 L100 270" stroke="#333" strokeWidth="8" strokeLinecap="round"/>
              <path d="M255 240 L300 270" stroke="#333" strokeWidth="8" strokeLinecap="round"/>
              
              {/* Hands */}
              <path d="M100 270 L85 275 L85 285 L95 290 L105 285 L105 275 L95 270 Z" fill="#DDD" stroke="#333"/>
              <path d="M300 270 L315 275 L315 285 L305 290 L295 285 L295 275 L305 270 Z" fill="#DDD" stroke="#333"/>
              
              {/* Knowledge flow paths - removed to clean up robot face */}
              
              {/* Screen in hand */}
              <rect x="75" y="275" width="80" height="60" rx="5" fill="#0EA5E9" stroke="#333"/>
              <rect x="80" y="280" width="70" height="42" rx="2" fill="#111" stroke="#333" />
              <line x1="85" y1="290" x2="125" y2="290" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />
              <line x1="85" y1="295" x2="120" y2="295" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />
              <line x1="85" y1="300" x2="125" y2="300" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />
              <line x1="85" y1="305" x2="130" y2="305" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />
              <line x1="85" y1="310" x2="120" y2="310" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />
              <line x1="85" y1="315" x2="110" y2="315" stroke="#8B5CF6" strokeWidth="1" opacity="0.8" />

              {/* Interface lights */}
              <circle cx="140" cy="325" r="3" fill="#8B5CF6" />
              <circle cx="130" cy="325" r="3" fill="#0EA5E9" />
              <circle cx="120" cy="325" r="3" fill="#8B5CF6" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-6">Your Organization's Internal Wikipedia</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Instant Information Access</h4>
                  <p className="text-gray-700">Access critical company information with simple natural language queries. No more digging through multiple apps and databases.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Boost Productivity</h4>
                  <p className="text-gray-700">Reduce time spent searching for information by up to 70%. Get answers in seconds instead of hours.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Reduce Operational Costs</h4>
                  <p className="text-gray-700">Consolidate multiple information systems into one powerful AI agent, cutting software costs and administrative overhead.</p>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-lavender hover:bg-lavender-dark text-white">
              Learn How AIKA Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
