import { ScrollReveal } from "../magicui/ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    icon: "{ }",
    accent: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    top: "via-cyan-500/40",
    skills: ["Python (Advanced)", "C++", "SQL", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    accent: "text-blue-400",
    border: "hover:border-blue-500/40",
    top: "via-blue-500/40",
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    accent: "text-purple-400",
    border: "hover:border-purple-500/40",
    top: "via-purple-500/40",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    accent: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    top: "via-emerald-500/40",
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
    accent: "text-pink-400",
    border: "hover:border-pink-500/40",
    top: "via-pink-500/40",
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
    accent: "text-orange-400",
    border: "hover:border-orange-500/40",
    top: "via-orange-500/40",
    skills: ["ESP32-CAM", "MQTT", "Flutter", "Firebase", "Edge Computing"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative"
      style={{ background: "rgba(30,41,59,0.2)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-medium mb-4">
              What I Work With
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="animated-gradient-text">Skills</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              Technologies and tools I use to build things
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div
                className={`group relative bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 ${group.border} transition-all duration-300 h-full flex flex-col`}
              >
                {/* Top shimmer line on hover */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${group.top} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className={`font-semibold text-base ${group.accent}`}>
                    {group.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 rounded-lg text-sm bg-slate-700/60 text-slate-300 border border-slate-600/50 hover:bg-slate-600/60 hover:text-white transition-all duration-200 cursor-default"
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
