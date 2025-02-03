import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "orange-main": "rgb(254 139 83 / var(--tw-bg-opacity))",
        "blue-highlight": "rgb(185 217 255 / var(--tw-bg-opacity))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        xs: "3px",
      },
      keyframes: {
        initialToView: {
          '0%': { transform: 'translate(-15%, -12%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        initialToViewDelayed: {
          '0%': { transform: 'translate(15%, -12%)', opacity: "0", },
          '20%': { transform: 'translate(15%, -12%)', opacity: "0", },
          '100%': { transform: 'translate(0, 0)', opacity: "1" },
        },
        hoverFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        hoverFloatLeft: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, -10px)' },
        },
        hoverFloatRight: {
          '0%, 100%': { transform: 'translate(50%, 0)' },
          '50%': { transform: 'translate(50%, -10px)' },
        }
      },
      animation: {
        initialToView: "initialToView 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        initialToViewDelayed: "initialToViewDelayed 2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        floatinWind: "hoverFloat 11s ease-in-out infinite",
        floatinWindLeft: "hoverFloatLeft 11s ease-in-out infinite",
        floatinWindRight: "hoverFloatRight 11s ease-in-out infinite",
      }
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
