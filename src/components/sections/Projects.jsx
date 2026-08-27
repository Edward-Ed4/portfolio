import { ScrollReveal } from "../magicui/ScrollReveal";

const projects = [
  {
    title: "Cassava Leaf Disease Detection",
    description: "A deep learning system that classifies cassava leaf diseases from images using three transfer learning models (EfficientNetB0, ResNet50, and MobileNetV2) deployed as a live Streamlit web app with camera capture and treatment advice.",
    image: "/cassava.png",
    badge: "Deep Learning",
    badgeColor: "#22d3ee", badgeBg: "rgba(34,211,238,0.1)", badgeBorder: "rgba(34,211,238,0.25)",
    accentColor: "#22d3ee",
    tags: ["Python", "TensorFlow", "EfficientNetB0", "ResNet50", "MobileNetV2", "Streamlit", "Hugging Face"],
    features: [
      "3 CNN models trained & compared via transfer learning",
      "ResNet50 best model: 81.5% validation accuracy",
      "9,726 balanced images across 4 disease classes",
      "Live camera capture + treatment advice in Streamlit",
    ],
    stats: [{ value: "81.5%", label: "Best Accuracy" }, { value: "9,726", label: "Images" }, { value: "4", label: "Disease Classes" }],
    demo: "https://cassava-disease-classification-with-deep-learning-t7jyapv6cayz.streamlit.app/",
    github: "https://github.com/Edward-Ed4/Cassava-Disease-Classification-with-Deep-learning",
  },
  {
    title: "CloudTasks – AWS Serverless Todo App",
    description: "A fully serverless todo application on AWS. Lambda functions handle the API, API Gateway routes requests, MongoDB Atlas stores data, and the static frontend is hosted on S3 with a full CI/CD pipeline via GitHub Actions.",
    image: "/cloudtasks.png",
    badge: "Cloud / Serverless",
    badgeColor: "#fcd34d", badgeBg: "rgba(252,211,77,0.1)", badgeBorder: "rgba(252,211,77,0.3)",
    accentColor: "#fcd34d",
    tags: ["AWS Lambda", "API Gateway", "MongoDB Atlas", "AWS S3", "AWS SAM", "Node.js", "GitHub Actions"],
    features: [
      "Three Lambda functions: getTodos, createTodo, deleteTodo",
      "MongoDB Atlas with cached client across warm invocations",
      "Static frontend hosted on AWS S3 with public website hosting",
      "Full CI/CD pipeline, auto-deploys on every push to main",
    ],
    stats: [{ value: "100%", label: "Serverless" }, { value: "3", label: "Lambda Fns" }, { value: "CI/CD", label: "Automated" }],
    demo: "https://d18dq5screwix.cloudfront.net/",
    github: "https://github.com/Edward-Ed4/azure-serverless-todo",
  },
  {
    title: "Pig Disease Detection System",
    description: "An IoT + AI solution that combines ESP32-CAM hardware and machine learning to monitor pig health in real-time, helping farmers detect illnesses early and cut livestock losses significantly.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/aaef4c265_image.png",
    badge: "IoT + AI",
    badgeColor: "#6ee7b7", badgeBg: "rgba(110,231,183,0.1)", badgeBorder: "rgba(110,231,183,0.25)",
    accentColor: "#6ee7b7",
    tags: ["ESP32-CAM", "Machine Learning", "Edge Impulse", "Flutter", "MQTT", "TensorFlow Lite"],
    features: [
      "Real-time image capture via ESP32-CAM",
      "On-device ML inference with TensorFlow Lite",
      "Flutter mobile app for instant farmer alerts",
      "85% early disease detection rate in trials",
    ],
    stats: [{ value: "85%", label: "Detection Rate" }, { value: "24/7", label: "Monitoring" }, { value: "60%", label: "Cost Reduction" }],
    demo: "https://edward-ed4.github.io/pig_disease_detection/",
    github: "https://github.com/Edward-Ed4/Automated-Pig-Disease-Detection-System",
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive Django-based backend for managing hospital operations (doctors, patients, appointments, diagnoses, and medical history) with a production-ready REST API and role-based access control.",
    image: "/hms.png",
    badge: "Backend System",
    badgeColor: "#67e8f9", badgeBg: "rgba(103,232,249,0.08)", badgeBorder: "rgba(103,232,249,0.25)",
    accentColor: "#67e8f9",
    tags: ["Python", "Django 5.1.6", "PostgreSQL", "Django REST Framework", "Gunicorn", "WhiteNoise"],
    features: [
      "Doctor & patient management modules",
      "Smart appointment scheduling with conflict detection",
      "Role-based access control (admin, doctor, receptionist)",
      "Production-ready: Gunicorn + WhiteNoise + PostgreSQL",
    ],
    stats: [{ value: "6+", label: "Modules" }, { value: "REST", label: "API Ready" }, { value: "RBAC", label: "Secured" }],
    demo: "https://medicore-hms-eooo.onrender.com/",
    github: "https://github.com/Edward-Ed4/hms_database",
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
    <section id="projects" className="py-28 px-6 relative" style={{ background: "#041419" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">What I've Built</span>
            <h2 className="section-title mt-4">
              Featured <span className="accent-gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              Deep learning, cloud infrastructure, IoT, and backend systems, built to solve real problems
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ScrollReveal key={project.title} delay={100}>
              <div className="project-card group rounded-2xl overflow-hidden transition-all duration-500">
                {/* Image banner */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(2,12,16,0.1) 0%, rgba(2,12,16,0.92) 100%)" }} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: project.badgeBg, color: project.badgeColor, border: `1px solid ${project.badgeBorder}` }}>
                    {project.badge}
                  </span>
                  <div className="absolute bottom-4 left-6 flex gap-6">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-base font-bold" style={{ color: project.accentColor }}>{s.value}</div>
                        <div className="text-xs text-gray-600">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-7">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-7">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: project.accentColor }}>
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="flex-shrink-0 rounded-full mt-1.5"
                              style={{ width: "6px", height: "6px", background: project.accentColor, minWidth: "6px" }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: project.accentColor }}>
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (<span key={tag} className="tech-tag">{tag}</span>))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-accent"
                        style={{ "--accent": project.accentColor }}>
                        🔗 Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
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
