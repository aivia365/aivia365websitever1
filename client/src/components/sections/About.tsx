import { FounderQuote } from "@/components/ui/FounderQuote";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            About <span className="gradient-text">AIVIA</span>
          </h2>
          <p className="text-lg text-gray-700">
            We're building the next generation of AI productivity tools for the modern workplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <svg
              className="w-full h-auto rounded-xl shadow-lg"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="250" cy="250" r="250" fill="#F5F5F7" />
                <path d="M250 75L375 175L250 275L125 175L250 75Z" fill="#675BD6" />
                <path d="M250 425L375 325L250 225L125 325L250 425Z" fill="#3A5BFF" />
                <path
                  d="M250 275L125 175L250 75L375 175L250 275Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.3"
                />
                <path
                  d="M250 225L125 325L250 425L375 325L250 225Z"
                  fill="url(#paint1_linear)"
                  fillOpacity="0.3"
                />
                <circle cx="250" cy="250" r="40" fill="white" />
                <circle cx="250" cy="250" r="20" fill="#675BD6" />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="250"
                  y1="75"
                  x2="250"
                  y2="275"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A5BFF" />
                  <stop offset="1" stopColor="#675BD6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="250"
                  y1="225"
                  x2="250"
                  y2="425"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#675BD6" />
                  <stop offset="1" stopColor="#3A5BFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At AIVIA, we're on a mission to transform how organizations access, share, and utilize their collective knowledge. We believe that the right information should be instantly available to every team member, regardless of department or role.
            </p>
            <p className="text-gray-700 mb-6">
              Our AI-powered tools eliminate information silos, reduce redundant work, and empower employees to make faster, better-informed decisions. By consolidating knowledge and streamlining access, we help companies reduce costs while boosting productivity.
            </p>
            <h3 className="text-2xl font-bold font-poppins mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Innovation</h4>
                  <p className="text-gray-700">Constantly pushing the boundaries of what AI can do for workplace productivity.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Security & Trust</h4>
                  <p className="text-gray-700">Ensuring your company's data remains secure and protected at all times.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Customer Success</h4>
                  <p className="text-gray-700">Our success is measured by the success of our customers and their teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <FounderQuote className="mt-16" />
      </div>
    </section>
  );
}
