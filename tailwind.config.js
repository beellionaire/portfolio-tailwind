/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#64748b",
        dark: "#1e293b",
      },
      screens: {
        xl: "768px",
        "2xl": "1024px",
      },
    },
  },
  plugins: [],
};
