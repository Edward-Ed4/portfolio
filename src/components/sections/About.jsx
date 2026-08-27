import { ScrollReveal } from "../magicui/ScrollReveal";

const tags = ["Open to Work", "Uganda 🇺🇬", "Remote Friendly"];

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative" style={{ background: "transparent" }}>
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">

        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#06b6d4" }}>
            About Me
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-4 mb-14">
            <h2 className="font-black leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              <span className="block text-white">Building.</span>
              <span className="block accent-gradient-text">Learning.</span>
              <span className="block text-white">Shipping.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-white font-semibold">Computer Science student</span> and{" "}
                <span className="font-semibold" style={{ color: "#22d3ee" }}>Backend Developer</span>{" "}
                with a deep passion for Machine Learning and Data Science.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                I thrive in the logic-heavy world of server-side development,
                specifically using Django to build the intelligent engines that power modern applications.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                My goal is to engineer scalable, data-driven systems that solve real-world problems.
                Driven by clean code, deep logic, and the endless possibilities of AI.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {tags.map((tag) => (<span key={tag} className="tag-pill">{tag}</span>))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: "4+",   label: "Projects Built" },
                  { number: "10+",  label: "Technologies" },
                  { number: "100%", label: "Passionate" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <div className="text-2xl font-bold" style={{ color: "#22d3ee" }}>{stat.number}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "#06b6d4" }}>
                What I Do
              </p>
              {[
                { num: "01", title: "Backend Development", sub: "Django · REST APIs · PostgreSQL" },
                { num: "02", title: "Machine Learning",    sub: "TensorFlow · Predictive Modeling" },
                { num: "03", title: "Data Science",        sub: "Analysis · Visualization · Insights" },
                { num: "04", title: "IoT & Edge AI",       sub: "ESP32-CAM · TFLite · MQTT" },
                { num: "05", title: "Cloud & DevOps",      sub: "AWS Lambda · S3 · GitHub Actions" },
              ].map((item) => (
                <div key={item.num} className="numbered-card group flex items-center gap-5 p-4 rounded-xl transition-all duration-300">
                  <div className="numbered-card-num flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{ border: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4" }}>
                    {item.num}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
