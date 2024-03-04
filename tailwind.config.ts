import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1280px",
      xl: "1420px",
    },
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      fontSize: {
        base: "0.875rem",
        xs: "0.75rem",
        sm: "0.8125rem",
        lg: "1rem",
        xl: ["1.25rem", "1.7rem"],
        "2xl": ["1.9rem", "2.2rem"],
        "3xl": ["2.5rem", "3rem"],
        "4xl": ["3.2rem", "3.7rem"],
      },
      colors: {
        primary: { ...colors.indigo, DEFAULT: colors.indigo[600] },
        secondary: { ...colors.fuchsia, DEFAULT: colors.fuchsia[600] },

        success: { ...colors.emerald, DEFAULT: colors.emerald[600] },
        warning: { ...colors.amber, DEFAULT: colors.amber[600] },
        danger: { ...colors.rose, DEFAULT: colors.rose[600] },
        neutral: { ...colors.slate, DEFAULT: colors.slate[600] },

        bgColor: {
          light: colors.indigo[800],
          DEFAULT: colors.indigo[900],
          dark: colors.indigo[950],
        },
        borderColor: {
          light: `${colors.indigo[100]}6A`,
          DEFAULT: `${colors.indigo[100]}44`,
          dark: `${colors.indigo[100]}1A`,
        },
        textColor: {
          light: colors.slate[50],
          DEFAULT: colors.slate[300],
          dark: colors.slate[400],
        },
      },
      backgroundImage: {
        "bg-element": "url('/images/bg-element.png')",
        hero: "url('/images/hero.jpeg')",
        "our-coin": "url('/images/our-coin-bg.png')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-12deg)",
          },
          "50%": {
            transform: "rotate(12deg)",
          },
        },
        jump: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        bgWiggle: {
          "0%, 100%": {
            backgroundPosition: "top right",
          },
          "50%": {
            backgroundPosition: "center left",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        bgWiggle: "bgWiggle 20s ease-in-out infinite",
        jump: "jump 300ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
