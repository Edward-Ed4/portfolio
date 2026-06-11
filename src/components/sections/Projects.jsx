import { ScrollReveal } from "../magicui/ScrollReveal";
import { ShimmerButton } from "../magicui/ShimmerButton";

const projects = [
  {
    title: "Pig Disease Detection System",
    description:
      "An IoT + AI solution combining ESP32-CAM hardware and machine learning to monitor pig health in real-time, helping farmers detect illnesses early and reduce livestock losses.",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/aaef4c265_image.png",
    badge: { label: "IoT + AI", color: "cyan" },
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
      "On-device ML model with TensorFlow Lite",
      "Flutter mobile app for instant alerts",
      "85% early detection rate in trials",
    ],
    links: {
      demo: "https://edward-ed4.github.io/pig_disease_detection/",
      github: "https://github.com/edward-ed4",
      details: "/pig-disease",
    },
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive Django-based backend system for managing hospital operations — doctors, patients, appointments, diagnoses, schedules, and medical history with a REST API architecture.",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/398c5fcf3_image.png",
    badge: { label: "Backend System", color: "green" },
    tags: [
      "Python",
      "Django 5.1.6",
      "PostgreSQL",
      "DRF",
      "Gunicorn",
      "WhiteNoise",
    ],
    features: [
      "Doctor & patient management modules",
      "Smart appointment scheduling with conflict detection",
      "Role-based access control",
      "Production-ready with Gunicorn + WhiteNoise",
    ],
    links: {
      github: "https://github.com/edward-ed4",
      details: "/hospital-management",
    },
  },
];

const badgeColors = {
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
  green: "bg-green-500/20 text-green-300 border-green-500/40",
};

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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="animated-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-lg mx-auto">
            From IoT-powered livestock monitoring to full hospital management
            systems
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={100}>
              <div
                className={`group grid md:grid-cols-2 gap-0 bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5`}
              >
                {/* Image side */}
                <div
                  className={`relative overflow-hidden min-h-72 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[project.badge.color]}`}
                  >
                    {project.badge.label}
                  </span>
                </div>

                {/* Content side */}
                <div
                  className={`p-8 md:p-10 flex flex-col justify-between ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
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

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs bg-slate-700/60 text-slate-400 border border-slate-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.demo && (
                      <ShimmerButton
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-5 py-2.5"
                      >
                        🔗 Live Demo
                      </ShimmerButton>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-slate-400 text-sm font-medium hover:border-slate-400 hover:text-white transition-all duration-200"
                    >
                      <GitHubIcon /> GitHub
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
