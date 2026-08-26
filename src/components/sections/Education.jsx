import { ScrollReveal } from "../magicui/ScrollReveal";

const education = [
  {
    status: "CURRENT",
    degree: "Bachelor of Science in Computer Science",
    school: "Makerere University",
    period: "2023 – Present",
    accent: "#a78bfa",
    border: "rgba(124,58,237,0.35)",
    bg: "rgba(124,58,237,0.06)",
  },
  {
    status: "PREVIOUS",
    degree: "Uganda Advanced Certificate of Education (A-Level)",
    school: "St. Mary's College Kisubi",
    period: "2021 – 2022",
    accent: "#818cf8",
    border: "rgba(79,70,229,0.25)",
    bg: "rgba(79,70,229,0.04)",
  },
];

const achievements = [
  { icon: "🏆", text: "Built 4+ real-world projects during studies" },
  { icon: "🤖", text: "Deployed ML model with 85% detection accuracy" },
  { icon: "☁️", text: "Shipped a fully serverless AWS application" },
  { icon: "📡", text: "Built end-to-end IoT + AI pig disease system" },
];

export function Education() {
  return (
    <section id="education" className="py-28 px-6 relative" style={{ background: "#050810" }}>
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#7c3aed" }}>
            Background
          </span>
          <h2 className="font-black leading-none tracking-tight mt-3 mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            <span className="text-white">Education &amp; </span>
            <span className="accent-gradient-text">Achievements</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education cards */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.degree}
                  className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: edu.bg, border: `1px solid ${edu.border}` }}>
                  <p className="text-xs font-bold tracking-[0.2em] mb-3" style={{ color: edu.accent }}>
                    {edu.status}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-snug mb-1">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm">{edu.school}</p>
                  <p className="text-xs mt-2" style={{ color: edu.accent }}>{edu.period}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Achievements */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "#7c3aed" }}>
                — Highlights
              </p>
              <div className="space-y-4">
                {achievements.map((a) => (
                  <div key={a.text}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{ border: "1px solid #0d1117", background: "rgba(255,255,255,0.01)" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                      e.currentTarget.style.background = "rgba(124,58,237,0.05)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "#0d1117";
                      e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                    }}
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <p className="text-gray-400 text-sm">{a.text}</p>
                  </div>
                ))}
              </div>

              {/* Quote block */}
              <div className="mt-8 pl-5 py-4" style={{ borderLeft: "3px solid rgba(124,58,237,0.5)" }}>
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  I treat every project as part of my education itself — some are finished systems,
                  others document experimentation and skill development.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
