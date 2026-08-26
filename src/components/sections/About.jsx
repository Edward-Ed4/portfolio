import { ScrollReveal } from "../magicui/ScrollReveal";

const cards = [
  {
    icon: "💻",
    title: "Backend Dev",
    sub: "Django Expert",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    icon: "🧠",
    title: "ML & AI",
    sub: "Data Science",
    glow: "rgba(79,70,229,0.15)",
    border: "rgba(79,70,229,0.25)",
  },
  {
    icon: "🗄️",
    title: "Databases",
    sub: "SQL & NoSQL",
    glow: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    icon: "⚙️",
    title: "APIs",
    sub: "REST Framework",
    glow: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.25)",
  },
];

const tags = ["Open to Work", "Uganda 🇺🇬", "Remote Friendly"];

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative" style={{ background: "#030712" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Who I Am</span>
            <h2 className="section-title mt-4">
              About <span className="accent-gradient-text">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-white font-semibold">Computer Science student</span>{" "}
                and{" "}
                <span className="font-semibold" style={{ color: "#a78bfa" }}>
                  Backend Developer
                </span>{" "}
                with a deep passion for Machine Learning and Data Science.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                I thrive in the logic-heavy world of server-side development —
                specifically using Django to build the intelligent engines that
                power modern applications.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                My goal is to engineer scalable, data-driven systems that solve
                real-world problems. Driven by clean code, deep logic, and the
                endless possibilities of AI.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: "2+", label: "Projects Built" },
                  { number: "5+", label: "Technologies" },
                  { number: "100%", label: "Passionate" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#a78bfa" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: cards */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 100}>
                  <div
                    className="glass-card group text-center p-6 rounded-2xl h-full transition-all duration-300"
                    style={{
                      "--glow": c.glow,
                      "--border": c.border,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    <div className="text-4xl mb-3">{c.icon}</div>
                    <h3 className="font-semibold text-white text-base mb-1">{c.title}</h3>
                    <p className="text-sm text-gray-600">{c.sub}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
