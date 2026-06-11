import { ScrollReveal } from "../magicui/ScrollReveal";
import { BorderBeamCard } from "../magicui/BorderBeam";

const cards = [
  { icon: "💻", title: "Backend Dev", sub: "Django Expert" },
  { icon: "🧠", title: "ML & AI", sub: "Data Science" },
  { icon: "🗄️", title: "Databases", sub: "SQL & NoSQL" },
  { icon: "⚙️", title: "APIs", sub: "REST Framework" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="animated-gradient-text">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student and Backend Developer with a deep
                passion for Machine Learning and Data Science. I thrive in the
                logic-heavy world of server-side development — specifically
                using Django to build the intelligent engines that power modern
                applications.
              </p>
              <p>
                My interest lies at the intersection of data and automation:
                transforming raw datasets into predictive insights and building
                the robust backends that support them.
              </p>
              <p>
                My goal is to engineer scalable, data-driven systems that solve
                real-world problems. I'm driven by clean code, deep logic, and
                the endless possibilities of AI.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Open to Work", "Uganda 🇺🇬", "Remote Friendly"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm border border-slate-700 text-slate-400 bg-slate-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cards */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 80}>
                  <BorderBeamCard>
                    <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-6 text-center hover:bg-slate-800/80 transition-colors duration-300 h-full">
                      <div className="text-4xl mb-3">{c.icon}</div>
                      <h3 className="font-semibold text-white mb-1">
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
