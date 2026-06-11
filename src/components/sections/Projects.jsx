import { ScrollReveal } from "../magicui/ScrollReveal";
import { ShimmerButton } from "../magicui/ShimmerButton";

const projects = [
  {
    title: "Cassava Leaf Disease Detection",
    description:
      "A deep learning system that classifies cassava leaf diseases from images using three transfer learning models — EfficientNetB0, ResNet50, and MobileNetV2 — deployed as a live Streamlit web app with camera capture and treatment advice.",
    image: "/cassava.png",
    badge: "Deep Learning",
    badgeStyle: {
      background: "rgba(168,85,247,0.15)",
      color: "#d8b4fe",
      border: "1px solid rgba(168,85,247,0.4)",
    },
    tags: [
      "Python",
      "TensorFlow",
      "EfficientNetB0",
      "ResNet50",
      "MobileNetV2",
      "Streamlit",
      "Hugging Face",
    ],
    features: [
      "3 CNN models trained & compared via transfer learning",
      "ResNet50 best model: 81.5% validation accuracy",
      "9,726 balanced images across 4 disease classes",
      "Live camera capture + treatment advice in Streamlit",
    ],
    stats: [
      { value: "81.5%", label: "Best Accuracy" },
      { value: "9,726", label: "Images" },
      { value: "4", label: "Disease Classes" },
    ],
    demo: "https://cassava-disease-classification-with-deep-learning.streamlit.app/",
    github:
      "https://github.com/Edward-Ed4/Cassava-Disease-Classification-with-Deep-learning",
  },
  {
    title: "CloudTasks – AWS Serverless Todo App",
    description:
      "A fully serverless todo application on AWS — Lambda functions handle the API, API Gateway routes requests, MongoDB Atlas stores data, and the static frontend is hosted on S3 with a full CI/CD pipeline via GitHub Actions.",
    image: "/cloudtasks.png",
    badge: "Cloud / Serverless",
    badgeStyle: {
      background: "rgba(251,146,60,0.15)",
      color: "#fdba74",
      border: "1px solid rgba(251,146,60,0.4)",
    },
    tags: [
      "AWS Lambda",
      "API Gateway",
      "MongoDB Atlas",
      "AWS S3",
      "AWS SAM",
      "Node.js",
      "GitHub Actions",
    ],
    features: [
      "Three Lambda functions: getTodos, createTodo, deleteTodo",
      "MongoDB Atlas with cached client across warm invocations",
      "Static frontend hosted on AWS S3 with public website hosting",
      "Full CI/CD pipeline — auto-deploys on every push to main",
    ],
    stats: [
      { value: "100%", label: "Serverless" },
      { value: "3", label: "Lambda Fns" },
      { value: "CI/CD", label: "Automated" },
    ],
    github: "https://github.com/Edward-Ed4/azure-serverless-todo",
  },
  {
    title: "Pig Disease Detection System",
    description:
      "An IoT + AI solution that combines ESP32-CAM hardware and machine learning to monitor pig health in real-time — helping farmers detect illnesses early and cut livestock losses significantly.",
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
      "A comprehensive Django-based backend for managing hospital operations — doctors, patients, appointments, diagnoses, and medical history — with a production-ready REST API and role-based access control.",
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
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                border: "1px solid #1e293b",
                background: "rgba(30,41,59,0.5)",
                color: "#64748b",
              }}
            >
              What I've Built
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="animated-gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: "#475569" }}>
              Deep learning, cloud infrastructure, IoT, and backend systems —
              built to solve real problems
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ScrollReveal key={project.title} delay={100}>
              <div
                className="group rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid #1e293b",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#334155")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1e293b")
                }
              >
                {/* Image banner */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "220px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.88) 100%)",
                    }}
                  />

                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={project.badgeStyle}
                  >
                    {project.badge}
                  </span>

                  {/* Stats row pinned to bottom of image */}
                  <div className="absolute bottom-4 left-6 flex gap-6">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-base font-bold"
                          style={{ color: "#22d3ee" }}
                        >
                          {s.value}
                        </div>
                        <div className="text-xs" style={{ color: "#64748b" }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-7"
                    style={{ color: "#64748b" }}
                  >
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-7">
                    {/* Features */}
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#06b6d4" }}
                      >
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "#64748b" }}
                          >
                            <span
                              className="flex-shrink-0 rounded-full mt-1.5"
                              style={{
                                width: "6px",
                                height: "6px",
                                background: "#06b6d4",
                              }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#06b6d4" }}
                      >
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-1 rounded-md text-xs"
                            style={{
                              background: "rgba(30,41,59,0.8)",
                              color: "#94a3b8",
                              border: "1px solid #1e293b",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                      style={{ border: "1px solid #1e293b", color: "#64748b" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#475569";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#1e293b";
                        e.currentTarget.style.color = "#64748b";
                      }}
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
