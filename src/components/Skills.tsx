const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["PHP", "Laravel"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "BootStrap", "Vue.js"],
    },
    {
      title: "Cloud Services",
      skills: ["AWS", "Digital Ocean"],
    },
    {
      title: "Third Party Integration",
      skills: [
        "Real-time services",
        "Payment Gateways",
        "End-to-end project integration",
        "Firebase services",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Jira", "Microsoft Project"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
