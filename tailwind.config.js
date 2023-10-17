/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gabarito", "sans-serif"],
      },
      colors: {
        bgPrimary: "#11353C",
      },
    },
  },
  plugins: [],
};
