import { Meteors } from "../magicui/Meteors";
import { ShimmerButton } from "../magicui/ShimmerButton";
import { AnimatedGradientText } from "../magicui/AnimatedGradientText";
import { TypingAnimation } from "../magicui/TypingAnimation";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ebaju-edward/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.746-2.004 1.472-.103.249-.129.597-.129.946v5.387h-3.523s.047-8.735 0-9.646h3.523v1.366c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.715 1.423 3.715 4.482v5.408zM5.337 8.433c-1.144 0-1.608-.752-1.608-1.454 0-.826.648-1.454 1.646-1.454.999 0 1.609.628 1.627 1.454 0 .809-.628 1.454-1.665 1.454zm1.39 12.019H3.937V10.806h2.79v9.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/edward-ed4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/Edward343230762",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ebajuedward3@gmail.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={18} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8"
          style={{ animation: "float-up 0.6s ease-out forwards" }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Profile image */}
        <div
          className="mx-auto mb-8 w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 to-blue-500"
          style={{ animation: "float-up 0.6s ease-out 0.1s both" }}
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/e4c600b3c_edward.jpg"
            alt="Ebaju Edward"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 text-white"
          style={{ animation: "float-up 0.6s ease-out 0.2s both" }}
        >
          Ebaju <AnimatedGradientText>Edward</AnimatedGradientText>
        </h1>

        {/* Typing subtitle */}
        <p
          className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 h-8"
          style={{ animation: "float-up 0.6s ease-out 0.3s both" }}
        >
          <TypingAnimation
            texts={[
              "Backend Developer",
              "Django Expert",
              "ML Enthusiast",
              "Data Science Explorer",
              "CS Student",
            ]}
            className="text-cyan-400"
          />
        </p>

        {/* Description */}
        <p
          className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed"
          style={{ animation: "float-up 0.6s ease-out 0.4s both" }}
        >
          Passionate about building intelligent backend systems with Django, and
          exploring the intersection of Machine Learning and Data Science.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-10"
          style={{ animation: "float-up 0.6s ease-out 0.5s both" }}
        >
          <ShimmerButton
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/db0d2b74c_EbajuEdward_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-3 text-base"
          >
            ⬇ Download CV
          </ShimmerButton>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects →
          </button>
        </div>

        {/* Social icons */}
        <div
          className="flex justify-center gap-3"
          style={{ animation: "float-up 0.6s ease-out 0.6s both" }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-14 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce block mx-auto"
          aria-label="Scroll down"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
