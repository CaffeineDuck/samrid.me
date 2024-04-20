/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        secondary: {
          50: "#f2fbfa",
          100: "#d2f5f0",
          200: "#a5eae1",
          300: "#71d7cf",
          400: "#4cc1bb",
          500: "#2aa29e",
          600: "#1f8280",
          700: "#1d6868",
          800: "#1b5454",
          900: "#1b4646",
          950: "#0a2729",
        },
      },
      fontFamily: {
        sans: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
