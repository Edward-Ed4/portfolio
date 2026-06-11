// Magic UI - Shimmer Button
export function ShimmerButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  download,
}) {
  const classes = `shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
