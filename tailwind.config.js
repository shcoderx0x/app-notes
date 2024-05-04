/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", " sans-serif"],
    },
    container: { center: true },
    colors: {
      "dark-primary": "#1e1f24",
      "dark-secondary": "#17181c",
      "dark-tertiary": "#26272c",
      "gray-font": "#bdbec2",
      "white-font": "#fefefe",
      blue: "#2987fe",
    },
    extend: {},
  },
  plugins: [],
};
