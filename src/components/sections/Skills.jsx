import { ScrollReveal } from "../magicui/ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    icon: "{}",
    skills: ["Python (Advanced)", "C++", "SQL", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: "⚙",
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Databases",
    icon: "🗄",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠",
    skills: [
      "Git",
      "GitHub",
      "Gunicorn",
      "WhiteNoise",
      "Microsoft Excel",
      "Office.js",
    ],
  },
  {
    title: "ML & Data Science",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Data Science",
      "Predictive Modeling",
      "Edge Impulse",
      "TensorFlow Lite",
    ],
  },
  {
    title: "IoT & Hardware",
    icon: "📡",
    skills: ["ESP32-CAM", "MQTT", "Flutter", "Firebase", "Edge Computing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-800/20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="animated-gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-md mx-auto">
            Technologies and tools I work with regularly
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div className="group relative bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 hover:border-cyan-500/40 hover:bg-slate-800/70 transition-all duration-300 h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl w-8 text-center">{group.icon}</span>
                  <h3 className="font-semibold text-cyan-400 text-base">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm bg-slate-700/60 text-slate-300 border border-slate-600/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
