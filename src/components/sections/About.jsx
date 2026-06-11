import { ScrollReveal } from "../magicui/ScrollReveal";
import { BorderBeamCard } from "../magicui/BorderBeam";

const cards = [
  {
    icon: "💻",
    title: "Backend Dev",
    sub: "Django Expert",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: "🧠",
    title: "ML & AI",
    sub: "Data Science",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: "🗄️",
    title: "Databases",
    sub: "SQL & NoSQL",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: "⚙️",
    title: "APIs",
    sub: "REST Framework",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
];

const tags = ["Open to Work", "Uganda 🇺🇬", "Remote Friendly"];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-medium mb-4">
              Who I Am
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="animated-gradient-text">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── Left: text ── */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-white font-semibold">
                  Computer Science student
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 font-semibold">
                  Backend Developer
                </span>{" "}
                with a deep passion for Machine Learning and Data Science.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I thrive in the logic-heavy world of server-side development —
                specifically using Django to build the intelligent engines that
                power modern applications.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                My goal is to engineer scalable, data-driven systems that solve
                real-world problems. Driven by clean code, deep logic, and the
                endless possibilities of AI.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm border border-slate-700 text-slate-400 bg-slate-800/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: "2+", label: "Projects Built" },
                  { number: "5+", label: "Technologies" },
                  { number: "100%", label: "Passionate" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/50"
                  >
                    <div className="text-2xl font-bold text-cyan-400">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: cards ── */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 100}>
                  <BorderBeamCard>
                    <div
                      className={`bg-gradient-to-br ${c.color} border border-slate-700/60 rounded-xl p-6 text-center group-hover:border-cyan-500/30 transition-all duration-300 h-full`}
                    >
                      <div className="text-4xl mb-3">{c.icon}</div>
                      <h3 className="font-semibold text-white text-base mb-1">
                        {c.title}
                      </h3>
                      <p className="text-sm text-slate-500">{c.sub}</p>
                    </div>
                  </BorderBeamCard>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
