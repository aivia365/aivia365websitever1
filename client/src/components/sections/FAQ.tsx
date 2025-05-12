import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is AIKA and how does it work?",
      answer: "AIKA (AI Knowledge Agent) is an intelligent system that connects to your organization's data sources and creates a unified knowledge base. It uses advanced natural language processing to understand and respond to questions, providing employees with instant access to company information."
    },
    {
      question: "Which systems can AIKA integrate with?",
      answer: "AIKA integrates with most common business applications including Slack, Google Workspace, Microsoft 365, Notion, Confluence, JIRA, GitHub, Salesforce, and many more. Custom integrations are also available for specialized systems."
    },
    {
      question: "How long does it take to implement AIKA?",
      answer: "Basic implementation can be completed in as little as two weeks. More complex deployments with multiple integrations and custom requirements typically take 4-6 weeks. Our team provides dedicated support throughout the implementation process."
    },
    {
      question: "Is AIKA secure and compliant with privacy regulations?",
      answer: "Yes, AIKA is built with security as a priority. It supports role-based access controls, complies with GDPR, CCPA, and other privacy regulations, and can be deployed in environments that require SOC 2, HIPAA, or other compliance frameworks."
    },
    {
      question: "How is AIKA priced?",
      answer: "AIKA is priced based on the number of users and integrations required. We offer flexible subscription plans starting from a per-user monthly fee. Contact our sales team for a custom quote based on your organization's specific needs."
    },
    {
      question: "Can AIKA be customized for specific industries or use cases?",
      answer: "Absolutely. AIKA is highly adaptable and can be tailored to various industries including healthcare, finance, legal, technology, and more. We offer industry-specific templates and custom configurations to meet your unique requirements."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about AIKA and how it can transform your organization
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}