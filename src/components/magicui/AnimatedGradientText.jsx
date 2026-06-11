// Magic UI - Animated Gradient Text
export function AnimatedGradientText({ children, className = "" }) {
  return (
    <span className={`animated-gradient-text ${className}`}>{children}</span>
  );
}
