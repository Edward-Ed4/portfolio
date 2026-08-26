import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "../magicui/ScrollReveal";

const learningItems = [
  {
    num: "01",
    title: "Advanced Machine Learning",
    subtitle: "Deep Learning",
    description:
      "Deepening expertise in neural network architectures, transformers, and deploying production-grade ML pipelines.",
    progress: 72,
    status: "Active Focus",
    statusColor: "#a78bfa",
    statusBg: "rgba(124,58,237,0.15)",
    accent: "#a78bfa",
  },
  {
    num: "02",
    title: "Cloud Architecture",
    subtitle: "AWS & Serverless",
    description:
      "Expanding beyond Lambda — learning ECS, RDS, CloudFormation, and designing resilient distributed systems.",
    progress: 58,
    status: "Developing",
    statusColor: "#818cf8",
    statusBg: "rgba(79,70,229,0.15)",
    accent: "#818cf8",
  },
  {
    num: "03",
    title: "React & Frontend",
    subtitle: "Full-Stack",
    description:
      "Building richer front-end skills to complement my backend strength and ship complete end-to-end products.",
    progress: 45,
    status: "Learning",
    statusColor: "#c084fc",
    statusBg: "rgba(192,132,252,0.12)",
    accent: "#c084fc",
  },
];

function ProgressBar({ percent, color }) {
  const barRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="w-full rounded-full overflow-hidden" style={{ height: "4px", background: "#0d1117" }}>
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animated ? `${percent}%` : "0%",
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          boxShadow: animated ? `0 0 10px ${color}66` : "none",
        }}
      />
    </div>
  );
}

export function CurrentlyLearning() {
  return (
    <section id="learning" className="py-28 px-6 relative" style={{ background: "#030712" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        top: "30%", right: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#7c3aed" }}>
            Growth Path
          </span>
          <h2 className="font-black leading-none tracking-tight mt-3 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            <span className="text-white">Currently </span>
            <span className="accent-gradient-text">Learning</span>
          </h2>
          <p className="text-gray-600 max-w-xl mb-14">
            Technologies and disciplines I'm actively developing as I continue building
            technical depth and shipping real-world systems.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {learningItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div
                className="p-6 rounded-2xl h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.015)", border: "1px solid #0d1117" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${item.accent}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#0d1117"}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold" style={{ color: item.accent }}>{item.num}</span>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: item.statusBg, color: item.statusColor }}
                  >
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg leading-snug">{item.title}</h3>
                  <p className="text-xs font-medium mt-0.5" style={{ color: item.accent }}>{item.subtitle}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-bold" style={{ color: item.accent }}>{item.progress}%</span>
                  </div>
                  <ProgressBar percent={item.progress} color={item.accent} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal delay={300}>
          <div className="mt-10 p-6 rounded-2xl" style={{
            borderLeft: "3px solid rgba(124,58,237,0.5)",
            background: "rgba(124,58,237,0.04)",
            border: "1px solid rgba(124,58,237,0.1)",
            borderLeftWidth: "3px",
          }}>
            <p className="text-gray-500 text-sm leading-relaxed">
              I treat learning as part of the portfolio itself. Some projects are finished systems, while
              others document experimentation and the gradual development of new technical skills.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
