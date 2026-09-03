import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0D",
        surface: "#17181C",
        "surface-soft": "#1E2024",
        line: "#2A2B30",
        paper: "#F3F1EC",
        mute: "#9A9CA5",
        ember: "#FF5A1F",
        "ember-soft": "#FFB088",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontWeight: {
        "700": "700",
        "800": "800",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
