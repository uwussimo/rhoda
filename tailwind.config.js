/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1024px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          light: "#F5F5F7",
          lighter: "#FBFBFD",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1D1D1F",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#86868B",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-large": [
          "80px",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        display: ["56px", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-small": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        "subhead-large": [
          "28px",
          { lineHeight: "1.3", letterSpacing: "-0.015em" },
        ],
        subhead: ["24px", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        "subhead-small": [
          "21px",
          { lineHeight: "1.3", letterSpacing: "-0.015em" },
        ],
        "body-large": [
          "19px",
          { lineHeight: "1.5", letterSpacing: "-0.015em" },
        ],
        body: ["17px", { lineHeight: "1.5", letterSpacing: "-0.015em" }],
        "body-small": [
          "15px",
          { lineHeight: "1.5", letterSpacing: "-0.015em" },
        ],
        "label-large": [
          "14px",
          { lineHeight: "1.3", letterSpacing: "-0.015em" },
        ],
        label: ["12px", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "980px",
        wide: "1024px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
