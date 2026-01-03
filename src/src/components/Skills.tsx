export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Firebase', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'REST API', level: 75 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">Skills</h2>
          <p className="text-gray-400 text-lg">
            전문성을 갖춘 기술 스택
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl mb-6 text-white">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 pt-16 border-t border-zinc-800">
          <h3 className="text-center text-xl mb-8 text-gray-400">주요 기술</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'TypeScript', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Git'].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-gray-300 hover:bg-green-500 hover:text-black hover:border-green-500 transition-colors cursor-default"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
