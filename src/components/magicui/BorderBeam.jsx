// Magic UI - Border Beam effect for cards
import { useEffect, useRef } from "react";

export function BorderBeamCard({ children, className = "" }) {
  return (
    <div className={`relative group rounded-xl overflow-hidden ${className}`}>
      {/* animated border */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "transparent",
          boxShadow: "inset 0 0 0 1px transparent",
        }}
      />
      <span
        className="pointer-events-none absolute inset-[-1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "conic-gradient(from var(--angle, 0deg), transparent 0%, #06b6d4 10%, #3b82f6 20%, transparent 30%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          animation: "spin-slow 3s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin-slow {
          to { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
      {children}
    </div>
  );
}
