import { FeatureCard } from "@/components/ui/FeatureCard";
import { 
  LayoutGrid, 
  MessageSquare, 
  Shield, 
  BarChart3, 
  TrendingUp,
  Users
} from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Smart Data Integration",
      description: "Connect to all your existing systems including Slack, Google Workspace, Microsoft 365, Notion, and more. AIKA learns from all your data sources.",
      icon: LayoutGrid,
      benefits: ["Secure API integrations", "Automatic sync", "Custom data connectors"]
    },
    {
      title: "Natural Language Interface",
      description: "Ask questions in plain English and receive accurate, contextual answers instantly. No complex search queries or specific syntax required.",
      icon: MessageSquare,
      benefits: ["Contextual understanding", "Multi-language support", "Conversation memory"]
    },
    {
      title: "Enterprise-Grade Security",
      description: "Keep your company's sensitive information protected with state-of-the-art security protocols and granular access controls.",
      icon: Shield,
      benefits: ["End-to-end encryption", "Role-based permissions", "SOC 2 compliance"]
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights into how your team uses information with comprehensive analytics dashboards. Identify knowledge gaps and optimize resources.",
      icon: BarChart3,
      benefits: ["Usage patterns", "Information bottlenecks", "Custom reports"]
    },
    {
      title: "Learning & Adaptation",
      description: "AIKA continuously learns from interactions and feedback to improve its answers over time, becoming more valuable to your organization with every query.",
      icon: TrendingUp,
      benefits: ["Continuous improvement", "Feedback integration", "Personalized responses"]
    },
    {
      title: "Team Collaboration",
      description: "Foster collaboration with shared knowledge spaces, team queries, and the ability to collaborate on improving the knowledge base collectively.",
      icon: Users,
      benefits: ["Shared knowledge spaces", "Knowledge contributions", "Team integrations"]
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-700">
            AIKA comes packed with everything you need to transform how your organization accesses and utilizes internal knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              benefits={feature.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
