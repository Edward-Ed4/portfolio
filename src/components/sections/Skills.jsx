import { ScrollReveal } from "../magicui/ScrollReveal";

const skillGroups = [
  {
    num: "01", title: "Languages",
    accent: "#22d3ee", border: "rgba(34,211,238,0.15)",
    skills: ["Python (Advanced)", "C++", "SQL", "CSS", "JavaScript"],
  },
  {
    num: "02", title: "Frameworks",
    accent: "#06b6d4", border: "rgba(6,182,212,0.15)",
    skills: ["Django", "Django REST Framework"],
  },
  {
    num: "03", title: "Databases",
    accent: "#67e8f9", border: "rgba(103,232,249,0.15)",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    num: "04", title: "Tools & Platforms",
    accent: "#6ee7b7", border: "rgba(110,231,183,0.15)",
    skills: ["Git", "GitHub", "Gunicorn", "WhiteNoise", "Microsoft Excel", "Office.js"],
  },
  {
    num: "05", title: "ML & Data Science",
    accent: "#a5f3fc", border: "rgba(165,243,252,0.12)",
    skills: ["Machine Learning", "Data Science", "Predictive Modeling", "Edge Impulse", "TensorFlow Lite"],
  },
  {
    num: "06", title: "IoT & Hardware",
    accent: "#fcd34d", border: "rgba(252,211,77,0.15)",
    skills: ["ESP32-CAM", "MQTT", "Flutter", "Firebase", "Edge Computing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative" style={{ background: "#020c10" }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#06b6d4" }}>
            What I Work With
          </span>
          <h2 className="font-black leading-none tracking-tight mt-3 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            <span className="text-white">Skills &amp; </span>
            <span className="accent-gradient-text">Tools</span>
          </h2>
          <p className="text-gray-600 max-w-xl mb-14">
            A selection of the technical tools and technologies I use while
            working on backend, ML, data, and IoT projects.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div
                className="group relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.015)", border: `1px solid ${group.border}` }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = group.accent + "55";
                  e.currentTarget.style.boxShadow = `0 0 30px ${group.accent}11`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = group.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }} />

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ border: `1px solid ${group.accent}55`, color: group.accent, background: `${group.accent}10` }}>
                    {group.num}
                  </div>
                  <h3 className="font-semibold text-white text-base">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
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
