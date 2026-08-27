import { useEffect, useRef } from "react";
import { ParticleCanvas } from "../magicui/ParticleCanvas";
import { TypingAnimation } from "../magicui/TypingAnimation";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ebaju-edward/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.746-2.004 1.472-.103.249-.129.597-.129.946v5.387h-3.523s.047-8.735 0-9.646h3.523v1.366c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.715 1.423 3.715 4.482v5.408zM5.337 8.433c-1.144 0-1.608-.752-1.608-1.454 0-.826.648-1.454 1.646-1.454.999 0 1.609.628 1.627 1.454 0 .809-.628 1.454-1.665 1.454zm1.39 12.019H3.937V10.806h2.79v9.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/edward-ed4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/Edward343230762",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ebajuedward3@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "72px", background: "#030712" }}
    >
      <ParticleCanvas />

      {/* Left violet glow */}
      <div className="absolute pointer-events-none" style={{
        top: "40%", left: "25%", transform: "translate(-50%,-50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #030712)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-72px)] py-16">

          {/* ── LEFT: Photo ── */}
          <div
            className="flex justify-center lg:justify-start"
            style={{ animation: "fadeUp 0.6s ease-out 0.1s both", opacity: 0 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl" style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                filter: "blur(30px)",
                opacity: 0.4,
                transform: "scale(1.05)",
              }} />
              {/* Decorative block behind the photo */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl" style={{
                width: "100%", height: "100%",
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(79,70,229,0.2))",
                border: "1px solid rgba(124,58,237,0.25)",
              }} />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden" style={{
                width: "clamp(280px, 35vw, 420px)",
                height: "clamp(340px, 45vw, 520px)",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2), 0 30px 80px rgba(0,0,0,0.6)",
              }}>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/e4c600b3c_edward.jpg"
                  alt="Ebaju Edward"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(3,7,18,0.5) 100%)",
                }} />
              </div>
              {/* Available badge pinned to photo */}
              <div
                className="absolute -top-4 left-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  border: "1px solid rgba(167,139,250,0.35)",
                  background: "rgba(3,7,18,0.9)",
                  backdropFilter: "blur(10px)",
                  color: "#a78bfa",
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#a78bfa", animation: "pulse 2s infinite" }} />
                Available for opportunities
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="flex flex-col gap-6 lg:pl-4">
            {/* Role label */}
            <div style={{ animation: "fadeUp 0.5s ease-out 0.2s both", opacity: 0 }}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#a78bfa" }}>
                Backend Developer
              </span>
            </div>

            {/* Massive stacked name */}
            <div style={{ animation: "fadeUp 0.5s ease-out 0.3s both", opacity: 0 }}>
              <h1 className="font-black leading-none tracking-tight" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
                <span className="block text-white">EBAJU</span>
                <span className="block hero-gradient-text">EDWARD</span>
              </h1>
            </div>

            {/* Typing subtitle */}
            <div style={{ animation: "fadeUp 0.5s ease-out 0.4s both", opacity: 0, minHeight: "2rem" }}>
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "#7c3aed" }} />
                <TypingAnimation
                  texts={["Django Expert", "ML Enthusiast", "Data Science Explorer", "CS Student", "Problem Solver"]}
                  className="text-lg font-semibold"
                  style={{ color: "#6b7280" }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed max-w-lg"
              style={{ color: "#4b5563", animation: "fadeUp 0.5s ease-out 0.5s both", opacity: 0 }}>
              Passionate about building intelligent backend systems with Django
              and exploring the intersection of Machine Learning and Data Science.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4"
              style={{ animation: "fadeUp 0.5s ease-out 0.6s both", opacity: 0 }}>
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/db0d2b74c_EbajuEdward_CV.pdf"
          target="_blank" rel="noopener noreferrer" download="EbajuEdward_CV.pdf"
                className="btn-primary"
              >
                ⬇ Download CV
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost"
              >
                View My Work →
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3" style={{ animation: "fadeUp 0.5s ease-out 0.7s both", opacity: 0 }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="social-icon">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center transition-colors duration-300"
        style={{ color: "#1f2937" }}
        onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
        onMouseLeave={e => e.currentTarget.style.color = "#1f2937"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          style={{ animation: "bounce 2s infinite" }}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
