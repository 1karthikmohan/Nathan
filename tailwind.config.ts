import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B3B",
        ivory: "#FBF8F2",
        muted: "#3A4A6A",
        rule: "rgba(11,27,59,0.18)",
        accent: "#B08D57",
        brass: "#B08D57",
        "deep-green": "#3A4A6A",
        fog: "#EFE7DB"
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 23, 42, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
