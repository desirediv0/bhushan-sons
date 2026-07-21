/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand — violet + emerald + amber (clean & colorful) */
        primary:          "#6D28D9",
        "primary-light":  "#7C3AED",
        "primary-dark":   "#4C1D95",
        secondary:        "#10B981",
        "secondary-hover":"#059669",
        "secondary-light":"#A7F3D0",
        accent:           "#F59E0B",
        "accent-light":   "#FBBF24",

        /* Backgrounds */
        background:       "#FFFFFF",
        "background-alt": "#F8FAFC",
        "background-dark":"#0F172A",

        /* Text */
        text:             "#0F172A",
        "text-muted":     "#475569",
        "text-light":     "#94A3B8",
        "text-on-dark":   "#F8FAFC",
        "text-on-gold":   "#0F172A",

        /* Borders */
        border:           "#E2E8F0",
        "border-light":   "#F1F5F9",
        "border-gold":    "#7C3AED",

        /* Semantic */
        success:          "#059669",
        error:            "#DC2626",
        warning:          "#D97706",
        info:             "#2563EB",
      },

      fontFamily: {
        heading: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        accent:  ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },

      maxWidth: {
        "8xl": "1440px",
        "7xl": "1280px",
      },

      spacing: {
        11:  "2.75rem",
        13:  "3.25rem",
        15:  "3.75rem",
        18:  "4.5rem",
        22:  "5.5rem",
        26:  "6.5rem",
        30:  "7.5rem",
        34:  "8.5rem",
        38:  "9.5rem",
        42:  "10.5rem",
        46:  "11.5rem",
        50:  "12.5rem",
        54:  "13.5rem",
        58:  "14.5rem",
        62:  "15.5rem",
        66:  "16.5rem",
        70:  "17.5rem",
        72:  "18rem",
        80:  "20rem",
        88:  "22rem",
        96:  "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
      },

      letterSpacing: {
        superwide: "0.2em",
      },

      boxShadow: {
        gold:        "0 8px 24px rgba(16, 185, 129, 0.30)",
        navy:        "0 12px 32px rgba(109, 40, 217, 0.22)",
        card:        "0 1px 3px rgba(15,23,42,0.05), 0 0 0 1px rgba(15,23,42,0.03)",
        "card-hover":"0 20px 40px rgba(15,23,42,0.08), 0 0 0 1px rgba(124,58,237,0.20)",
      },

      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      zIndex: {
        sticky:  "100",
        overlay: "200",
        modal:   "300",
        toast:   "400",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%":      { opacity: "0.7" },
        },
      },

      animation: {
        "fade-in":    "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in":   "scale-in 0.4s ease-out forwards",
        shimmer:      "shimmer 2.5s linear infinite",
        float:        "float 5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
