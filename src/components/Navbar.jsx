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

      // Update active section
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="text-lg font-bold text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">E</span>E
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href.replace("#", "")
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
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
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:-translate-y-0.5 transition-transform duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Resume
          </a>

          {/* Mobile menu button */}
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
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === link.href.replace("#", "")
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
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
                  className="w-full inline-flex justify-center px-4 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
