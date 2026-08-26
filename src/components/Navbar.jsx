import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="text-lg font-black text-white hover:text-violet-400 transition-colors tracking-tight"
        >
          <span className="text-violet-400">E</span>E
          <span className="text-violet-500 text-xs font-mono ml-1 opacity-60">.dev</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${
                  active === link.href.replace("#", "") ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/db0d2b74c_EbajuEdward_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "#fff",
            boxShadow: "0 0 20px rgba(124,58,237,0.3)",
          }}
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(3,7,18,0.97)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(124,58,237,0.15)",
          }}
        >
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href.replace("#", "")
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69934993075368f2806495d7/db0d2b74c_EbajuEdward_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full inline-flex justify-center px-4 py-3 rounded-full text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff" }}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
