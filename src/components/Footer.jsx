const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const contactInfo = [
  { label: "ebajuedward3@gmail.com", href: "mailto:ebajuedward3@gmail.com" },
  { label: "WhatsApp (+256 773 033815)", href: "https://wa.me/256773033815" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ebaju-edward/" },
  { label: "GitHub (@edward-ed4)", href: "https://github.com/edward-ed4" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #0d1117", background: "#030712" }}>
      {/* 3-column content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="text-2xl font-black mb-4">
            <span className="text-white">PORT</span>
            <span className="accent-gradient-text">FOLIO</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            Backend development, machine learning, data science, and ongoing
            exploration of intelligent systems.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#7c3aed" }}>
            Navigation
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#374151" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={e => e.currentTarget.style.color = "#374151"}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#7c3aed" }}>
            Contact
          </p>
          <ul className="space-y-3">
            {contactInfo.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#374151" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={e => e.currentTarget.style.color = "#374151"}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #0d1117" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#1f2937" }}>
            © 2026 Ebaju Edward. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#111827" }}>
          </p>
        </div>
      </div>
    </footer>
  );
}
