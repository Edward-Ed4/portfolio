/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      animation: {
        "fade-up":      "fadeUp 0.5s ease-out forwards",
        "shimmer-text": "shimmer-text 4s linear infinite",
        "bounce-slow":  "bounce 2s infinite",
        "pulse-slow":   "pulse 3s infinite",
      },
      keyframes: {
        "shimmer-text": {
          "0%":   { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
