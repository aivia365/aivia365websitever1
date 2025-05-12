import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Flexible <span className="gradient-text">Pricing</span> for Organizations of All Sizes
          </h2>
          <p className="text-lg text-gray-700">
            Select the plan that best suits your organization's needs and scale as you grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Startup Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Startup</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold">$299</span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-gray-500">Perfect for growing teams</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Up to 25 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">50GB of data storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Core AIKA features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Basic integrations (Slack, Teams)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button className="w-full py-6 bg-gray-100 text-gray-900 hover:bg-gray-200">Get Started</Button>
            </div>
          </div>
          
          {/* Mid-scale Plan - Featured */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-lavender flex flex-col transform md:-translate-y-4 z-10">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-lavender text-white text-sm px-4 py-1 rounded-full font-semibold">Most Popular</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Mid-scale</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold">$799</span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-gray-500">Ideal for established businesses</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Up to 100 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">200GB of data storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">All AIKA features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Advanced integrations (Salesforce, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Priority support with 24/7 coverage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Role-based access controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Advanced analytics dashboard</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button className="w-full py-6 bg-lavender hover:bg-lavender-dark text-white">Get Started</Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-2xl font-extrabold">Custom Pricing</span>
              </div>
              <p className="mt-2 text-gray-500">For large-scale organizations</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Unlimited data storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">All AIKA features and add-ons</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Custom integrations & API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">On-premises deployment option</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Custom SLA with 99.99% uptime</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-lavender flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Advanced security features</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button className="w-full py-6 bg-blue hover:bg-blue-dark text-white">Contact Sales</Button>
            </div>
          </div>
        </div>
        
        {/* FAQ or additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-600 mt-2">
            Have questions about which plan is right for you? <a href="#contact" className="text-lavender font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}