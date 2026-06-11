import { ScrollReveal } from "../magicui/ScrollReveal";
import { ShimmerButton } from "../magicui/ShimmerButton";

const projects = [
  {
    title: "Pig Disease Detection System",
    description:
      "An IoT + AI solution that combines ESP32-CAM hardware and machine learning to monitor pig health in real-time — helping farmers detect illnesses early and cut livestock losses.",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/aaef4c265_image.png",
    badge: "IoT + AI",
    badgeStyle: {
      background: "rgba(6,182,212,0.15)",
      color: "#22d3ee",
      border: "1px solid rgba(6,182,212,0.4)",
    },
    tags: [
      "ESP32-CAM",
      "Machine Learning",
      "Edge Impulse",
      "Flutter",
      "MQTT",
      "TensorFlow Lite",
    ],
    features: [
      "Real-time image capture via ESP32-CAM",
      "On-device ML inference with TensorFlow Lite",
      "Flutter mobile app for instant farmer alerts",
      "85% early disease detection rate in trials",
    ],
    stats: [
      { value: "85%", label: "Detection Rate" },
      { value: "24/7", label: "Monitoring" },
      { value: "60%", label: "Cost Reduction" },
    ],
    demo: "https://edward-ed4.github.io/pig_disease_detection/",
    github: "https://github.com/edward-ed4",
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive Django-based backend for managing hospital operations — doctors, patients, appointments, diagnoses, and medical history with a production-ready REST API.",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/398c5fcf3_image.png",
    badge: "Backend System",
    badgeStyle: {
      background: "rgba(34,197,94,0.15)",
      color: "#86efac",
      border: "1px solid rgba(34,197,94,0.4)",
    },
    tags: [
      "Python",
      "Django 5.1.6",
      "PostgreSQL",
      "Django REST Framework",
      "Gunicorn",
      "WhiteNoise",
    ],
    features: [
      "Doctor & patient management modules",
      "Smart appointment scheduling with conflict detection",
      "Role-based access control (admin, doctor, receptionist)",
      "Production-ready: Gunicorn + WhiteNoise + PostgreSQL",
    ],
    stats: [
      { value: "6+", label: "Modules" },
      { value: "REST", label: "API Ready" },
      { value: "RBAC", label: "Secured" },
    ],
    github: "https://github.com/edward-ed4",
  },
];

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-medium mb-4">
              What I've Built
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="animated-gradient-text">Projects</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto">
              From IoT-powered livestock monitoring to full hospital management
              systems
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={100}>
              <div
                className="group rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-500 hover:border-slate-600"
                style={{ background: "rgba(30,41,59,0.4)" }}
              >
                {/* Image banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.85) 100%)",
                    }}
                  />

                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={project.badgeStyle}
                  >
                    {project.badge}
                  </span>

                  {/* Stats overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    {project.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                          {s.value}
                        </div>
                        <div className="text-xs text-slate-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Features */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-cyan-500 font-semibold mb-3">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-cyan-500 font-semibold mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-1 rounded-md text-xs bg-slate-700/60 text-slate-300 border border-slate-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.demo && (
                      <ShimmerButton
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-5 py-2.5"
                      >
                        🔗 Live Demo
                      </ShimmerButton>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-slate-400 text-sm font-medium hover:border-slate-400 hover:text-white transition-all duration-200"
                    >
                      <GitHubIcon /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
