/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        japanese: ["'Noto Serif JP'", "serif"],
      },
      colors: {
        crimson: {
          50: "#fff1f1",
          100: "#ffd7d7",
          500: "#dc2626",
          600: "#b91c1c",
          700: "#991b1b",
          900: "#450a0a",
        },
        ink: {
          900: "#0f0f0f",
          800: "#1a1a1a",
          700: "#2d2d2d",
        },
        gold: {
          400: "#d4af37",
          500: "#b8960c",
        },
        cream: "#faf7f2",
        parchment: "#f0e8d9",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
