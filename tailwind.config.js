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
        /* Brand */
        primary:          "#111111",
        secondary:        "#111111",
        "secondary-hover":"#333333",

        /* Backgrounds */
        background:       "#FFFFFF",
        "background-alt": "#FAFAFA",
        "background-dark":"#0A0A0A",

        /* Text */
        text:             "#111111",
        "text-muted":     "#666666",
        "text-light":     "#9CA3AF",
        "text-on-dark":   "#F9FAFB",
        "text-on-gold":   "#FFFFFF",

        /* Borders */
        border:           "#EAEAEA",
        "border-light":   "#FAFAFA",
        "border-gold":    "#111111",

        /* Semantic */
        success:          "#059669",
        error:            "#DC2626",
        warning:          "#D97706",
        info:             "#2563EB",
      },

      fontFamily: {
        heading: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body:    ["var(--font-inter)",    "Inter", "system-ui", "sans-serif"],
        accent:  ["var(--font-cormorant)","Cormorant Garamond", "Georgia", "serif"],
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
        gold:        "0 4px 14px rgba(17, 17, 17, 0.15)",
        card:        "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)",
        "card-hover":"0 12px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(17,17,17,0.1)",
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
      },

      animation: {
        "fade-in":     "fade-in 0.6s ease-out forwards",
        "fade-in-up":  "fade-in-up 0.6s ease-out forwards",
        "scale-in":    "scale-in 0.4s ease-out forwards",
        shimmer:       "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [],
};
