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
        background: "#080808",
        card: "#121212",
        border: "#1E1E1E",
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        accent: "#C6FF00",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse at center, rgba(198, 255, 0, 0.15) 0%, rgba(8, 8, 8, 0) 70%)",
        "project-gradient": "linear-gradient(to top, #121212 0%, rgba(18,18,18,0) 100%)",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;