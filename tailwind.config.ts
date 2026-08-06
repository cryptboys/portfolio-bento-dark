import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A", // New background color
        card: "#121212",      // New card background color
        border: "rgba(255,255,255,0.08)", // New border color
        primary: "#FFFFFF",   // Primary text color
        secondary: "#A1A1AA", // Secondary text color
        accent: "#C6FF00",    // Accent color
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"], // Geist Sans/Inter
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse at center, rgba(198, 255, 0, 0.15) 0%, rgba(10, 10, 10, 0) 70%)",
        "project-gradient": "linear-gradient(to top, #121212 0%, rgba(18,18,18,0) 100%)",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))", // Ensure 12-col grid is available
      }
    },
  },
  plugins: [],
};
export default config;
