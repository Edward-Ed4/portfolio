export function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: "1px solid #0d1117",
        background: "#030712",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "#1f2937" }}>
          © 2026 Ebaju Edward. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "#111827" }}>
          Built with React · Vite · Three.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
