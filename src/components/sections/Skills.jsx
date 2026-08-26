import { ScrollReveal } from "../magicui/ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    icon: "{ }",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.08)",
    borderHover: "rgba(167,139,250,0.3)",
    skills: ["Python (Advanced)", "C++", "SQL", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.08)",
    borderHover: "rgba(129,140,248,0.3)",
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    accent: "#c084fc",
    glow: "rgba(192,132,252,0.08)",
    borderHover: "rgba(192,132,252,0.3)",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    accent: "#6ee7b7",
    glow: "rgba(110,231,183,0.06)",
    borderHover: "rgba(110,231,183,0.25)",
    skills: ["Git", "GitHub", "Gunicorn", "WhiteNoise", "Microsoft Excel", "Office.js"],
  },
  {
    title: "ML & Data Science",
    icon: "🧠",
    accent: "#f9a8d4",
    glow: "rgba(249,168,212,0.06)",
    borderHover: "rgba(249,168,212,0.25)",
    skills: ["Machine Learning", "Data Science", "Predictive Modeling", "Edge Impulse", "TensorFlow Lite"],
  },
  {
    title: "IoT & Hardware",
    icon: "📡",
    accent: "#fcd34d",
    glow: "rgba(252,211,77,0.06)",
    borderHover: "rgba(252,211,77,0.25)",
    skills: ["ESP32-CAM", "MQTT", "Flutter", "Firebase", "Edge Computing"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 relative"
      style={{ background: "#050810" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">What I Work With</span>
            <h2 className="section-title mt-4">
              Technical <span className="accent-gradient-text">Skills</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Technologies and tools I use to build things
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div
                className="skill-card group relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
                style={{ "--accent": group.accent, "--glow": group.glow, "--border-hover": group.borderHover }}
              >
                {/* Top glow line on hover */}
                <div className="skill-card-glow-line" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="font-semibold text-base" style={{ color: group.accent }}>
                    {group.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
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
