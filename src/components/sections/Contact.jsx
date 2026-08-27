import { ScrollReveal } from "../magicui/ScrollReveal";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ebaju-edward/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.746-2.004 1.472-.103.249-.129.597-.129.946v5.387h-3.523s.047-8.735 0-9.646h3.523v1.366c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.715 1.423 3.715 4.482v5.408zM5.337 8.433c-1.144 0-1.608-.752-1.608-1.454 0-.826.648-1.454 1.646-1.454.999 0 1.609.628 1.627 1.454 0 .809-.628 1.454-1.665 1.454zm1.39 12.019H3.937V10.806h2.79v9.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0"/></svg> },
  { label: "GitHub",   href: "https://github.com/edward-ed4",              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "Twitter",  href: "https://x.com/Edward343230762",               icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "#020c10" }}>
      <div className="absolute pointer-events-none" style={{
        bottom: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "500px",
        background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="max-w-2xl mx-auto text-center relative">
        <ScrollReveal>
          <span className="section-badge">Let's Connect</span>
          <h2 className="font-bold mt-4 mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Ready to build{" "}
            <span className="accent-gradient-text">something great?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto text-gray-600">
            Open to new opportunities, collaborations, or just a conversation
            about backend systems, ML, or anything tech.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a href="mailto:ebajuedward3@gmail.com" className="btn-primary">
              ✉ ebajuedward3@gmail.com
            </a>
            <a href="https://wa.me/256773033815" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              📱 +256 773 033815
            </a>
          </div>

          <div className="flex items-center gap-4 mb-10 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "#111827" }} />
            <span className="text-xs" style={{ color: "#1f2937" }}>or find me on</span>
            <div className="flex-1 h-px" style={{ background: "#111827" }} />
          </div>

          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} className="social-icon">{s.icon}</a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
