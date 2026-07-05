import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        surface: "#FFFFFF",
        "surface-muted": "#F4F3EF",
        ink: "#14211C",
        "ink-soft": "#33413B",
        muted: "#5B6763",
        "muted-2": "#6B736E",
        line: "#E4E2DB",
        // action green (accent only)
        action: "#087F5B",
        "action-hover": "#0B5B44",
        "action-soft": "#E6F4EE",
        "action-ring": "rgba(8,127,91,0.22)",
        // warm counter-accent (user voice)
        ember: "#C2410C",
        "ember-soft": "#FBEDE4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        card: "22px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 18px 50px rgba(20,33,28,0.08)",
        "card-lg": "0 30px 80px rgba(20,33,28,0.10)",
        cta: "0 12px 28px rgba(8,127,91,0.22)",
      },
      maxWidth: {
        container: "1120px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
