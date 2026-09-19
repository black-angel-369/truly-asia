import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        port: {
          950: "#0A1B30",
          900: "#0F2540",
          800: "#153252",
          700: "#1D4265",
          600: "#2A567F",
        },
        sand: {
          50: "#F7F6F3",
          100: "#EDEBE4",
          200: "#DFDCD1",
        },
        clay: {
          300: "#E3B064",
          400: "#D69A45",
          500: "#C9913F",
          600: "#A96F24",
          700: "#82551C",
        },
        ink: {
          900: "#181712",
          700: "#3B382F",
          500: "#6B6759",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 37, 64, 0.06), 0 8px 24px -12px rgba(15, 37, 64, 0.18)",
        lifted: "0 4px 8px rgba(15, 37, 64, 0.08), 0 20px 40px -16px rgba(15, 37, 64, 0.28)",
        glow: "0 0 0 1px rgba(201,145,63,0.25), 0 12px 32px -8px rgba(201,145,63,0.35)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "port-gradient": "linear-gradient(135deg, #0F2540 0%, #153252 55%, #0A1B30 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
