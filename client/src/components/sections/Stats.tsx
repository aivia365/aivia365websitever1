export function Stats() {
  const stats = [
    {
      value: "70%",
      label: "Time Saved On Information Retrieval"
    },
    {
      value: "40%",
      label: "Reduction In Software Costs"
    },
    {
      value: "5x",
      label: "Faster Employee Onboarding"
    },
    {
      value: "90%",
      label: "User Satisfaction Rating"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-lightest">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
