import { ScrollReveal } from "../magicui/ScrollReveal";

const certifications = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    issued: "Sep 21, 2025",
    description: "Completed hands-on training in the full data analytics process: data transformation, statistical analysis, Excel, SQL, and Tableau. Learned how analytics creates business value from raw data.",
    skills: ["SQL", "Excel", "Tableau", "Statistical Analysis", "Data Preparation"],
    color: "#22d3ee", bg: "rgba(34,211,238,0.05)", border: "rgba(34,211,238,0.15)", logoBg: "rgba(34,211,238,0.08)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    issued: "Aug 25, 2025",
    description: "Explored the foundations of data science, including the role of data in AI and ML, the data analytics landscape, and pathways to a career in the field.",
    skills: ["Data Science", "AI Fundamentals", "Machine Learning Concepts", "Data Analytics"],
    color: "#06b6d4", bg: "rgba(6,182,212,0.05)", border: "rgba(6,182,212,0.15)", logoBg: "rgba(6,182,212,0.08)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "BSc Computer Science",
    issuer: "Makerere University",
    issued: "2023 to Present",
    description: "Currently pursuing a Bachelor of Science in Computer Science at one of East Africa's top universities, covering algorithms, data structures, systems, and software engineering.",
    skills: ["Algorithms", "Data Structures", "Systems Programming", "Software Engineering", "Databases"],
    color: "#6ee7b7", bg: "rgba(110,231,183,0.05)", border: "rgba(110,231,183,0.15)", logoBg: "rgba(110,231,183,0.08)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
  },
];

function VerifiedIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Education() {
  return (
    <section id="education" className="py-28 px-6 relative" style={{ background: "#041419" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#06b6d4" }}>
            Credentials
          </span>
          <h2 className="font-black leading-none tracking-tight mt-3 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            <span className="text-white">Education &amp; </span>
            <span className="accent-gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-600 max-w-xl mb-14">
            Formal education and verified credentials that back the work I build.
          </p>
        </ScrollReveal>

        <div className="space-y-5">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 100}>
              <div className="group flex flex-col md:flex-row gap-6 p-7 rounded-2xl transition-all duration-300"
                style={{ background: cert.bg, border: `1px solid ${cert.border}` }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cert.color + "44";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${cert.color}11`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = cert.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: cert.logoBg, color: cert.color, border: `1px solid ${cert.color}33` }}>
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-bold text-lg leading-snug">{cert.title}</h3>
                        <VerifiedIcon color={cert.color} />
                      </div>
                      <p className="text-sm mt-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full flex-shrink-0"
                      style={{ background: cert.logoBg, color: cert.color, border: `1px solid ${cert.color}33` }}>
                      {cert.issued}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-md"
                        style={{ background: "rgba(255,255,255,0.03)", color: "#4b5563", border: "1px solid #111827" }}>
                        {skill}
                      </span>
                    ))}
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
