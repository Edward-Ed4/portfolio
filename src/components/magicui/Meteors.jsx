// Magic UI - Meteors effect
export function Meteors({ number = 20 }) {
  const meteors = Array.from({ length: number }, (_, i) => ({
    id: i,
    top: Math.floor(Math.random() * 100),
    left: Math.floor(Math.random() * 100),
    delay: Math.random() * 5,
    duration: Math.floor(Math.random() * 5) + 5,
    size: Math.floor(Math.random() * 2) + 1,
  }));

  return (
    <>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="pointer-events-none absolute rotate-[215deg] animate-none"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size * 80}px`,
            background: `linear-gradient(to bottom, #06b6d4, transparent)`,
            borderRadius: "9999px",
            opacity: 0,
            animation: `meteor-fall ${m.duration}s linear ${m.delay}s infinite`,
            boxShadow: `0 0 4px 1px rgba(6,182,212,0.4)`,
          }}
        />
      ))}
    </>
  );
}
