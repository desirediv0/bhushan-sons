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
        /* Brand — editorial forest green + brass */
        primary:          "#16332B",
        "primary-light":  "#204338",
        "primary-dark":   "#0D211B",
        secondary:        "#B08A4A",
        "secondary-hover":"#9C7940",
        "secondary-light":"#CBA765",
        accent:           "#CBA765",
        "accent-light":   "#DDBE8A",

        /* Backgrounds */
        background:       "#FFFFFF",
        "background-alt": "#EDEBE4",
        "background-dark":"#16332B",

        /* Text */
        text:             "#1B1E1C",
        "text-muted":     "#5E635F",
        "text-light":     "#8B9089",
        "text-on-dark":   "#FFFFFF",
        "text-on-gold":   "#FFFFFF",

        /* Borders */
        border:           "#DCDAD2",
        "border-light":   "#EDEBE4",
        "border-gold":    "#B08A4A",
        "border-dark":    "rgba(255,255,255,0.14)",

        /* Semantic */
        success:          "#4B7A5E",
        error:            "#B0453F",
        warning:          "#B08A4A",
        info:             "#3E5C6E",
      },

      fontFamily: {
        heading: ["var(--font-playfair)", "Newsreader", "Georgia", "serif"],
        body:    ["var(--font-inter)",    "Instrument Sans", "system-ui", "sans-serif"],
        accent:  ["var(--font-playfair)", "Newsreader", "Georgia", "serif"],
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

      borderRadius: {
        sm: "3px",
        DEFAULT: "3px",
      },

      boxShadow: {
        gold:        "0 18px 44px -26px rgba(13,33,27,0.42)",
        navy:        "0 26px 64px -32px rgba(13,33,27,0.55)",
        card:        "0 1px 3px rgba(27,30,28,0.04)",
        "card-hover":"0 18px 44px -26px rgba(13,33,27,0.42)",
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
          from: { opacity: "0", transform: "translateY(22px)" },
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
