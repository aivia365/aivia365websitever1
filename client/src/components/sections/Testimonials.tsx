import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const testimonials = [
    {
      quote: "AIKA has transformed how our team accesses information. We've reduced time spent searching for answers by 65% and eliminated three separate software tools we previously relied on.",
      author: "Sarah L.",
      role: "CTO, TechFusion Inc.",
      initials: "SL",
      avatarColor: "bg-lavender-light"
    },
    {
      quote: "Onboarding new employees used to take weeks. With AIKA, our new hires can access company knowledge on day one, cutting our onboarding time in half while improving the experience.",
      author: "Mark R.",
      role: "HR Director, Global Ventures",
      initials: "MR",
      avatarColor: "bg-blue-light"
    },
    {
      quote: "As a fast-growing company, keeping everyone aligned was challenging. AIKA has become our central knowledge hub, ensuring every team member has the information they need instantly.",
      author: "Jennifer T.",
      role: "Operations Manager, StartUp Vision",
      initials: "JT",
      avatarColor: "bg-purple"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-700">
            Companies across industries are transforming their operations with AIKA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
              avatarColor={testimonial.avatarColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
