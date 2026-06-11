export function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: "1px solid #1e293b",
        background: "rgba(15,23,42,0.5)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: "#334155", fontSize: "14px" }}>
          © 2026 Ebaju Edward. All rights reserved.
        </p>
        <p style={{ color: "#1e293b", fontSize: "14px" }}>
          Built with React · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
