import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact" },
];

const sections = ["home", "about", "skills", "projects", "education", "learning", "contact"];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => scrollTo("#home")}
          className="text-lg font-black tracking-tight transition-colors duration-200"
          style={{ color: "#ffffff" }}
          onMouseEnter={e => e.currentTarget.style.color = "#67e8f9"}
          onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}>
          <span style={{ color: "#06b6d4" }}>E</span>E
          <span className="text-xs font-mono ml-1 opacity-50" style={{ color: "#0891b2" }}>.dev</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button onClick={() => scrollTo(link.href)}
                className={`nav-link ${active === link.href.replace("#", "") ? "nav-link-active" : ""}`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a href="/Ebaju_Edward_CV.pdf" target="_blank" rel="noopener noreferrer" download="Ebaju_Edward_CV.pdf"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)", color: "#fff", boxShadow: "0 0 20px rgba(6,182,212,0.25)" }}>
          Resume
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 transition-colors" style={{ color: "#4b5563" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
          onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t"
          style={{ background: "rgba(2,12,16,0.97)", backdropFilter: "blur(20px)", borderColor: "rgba(6,182,212,0.12)" }}>
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href.replace("#", "")
                      ? "bg-cyan-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  style={active === link.href.replace("#", "") ? { color: "#67e8f9" } : {}}>
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a href="/Ebaju_Edward_CV.pdf" target="_blank" rel="noopener noreferrer" download="Ebaju_Edward_CV.pdf"
                className="w-full inline-flex justify-center px-4 py-3 rounded-full text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)", color: "#fff" }}>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
