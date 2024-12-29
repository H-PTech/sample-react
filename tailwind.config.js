/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "rgba(0,0,0,0.8)",
        'banner': "#F5DAD2",
        'green-pastel': {
          500: "#75A47F",
          300: "#BACD92",
        }
      },
      fontFamily: {
        title: `gt-super, Georgia, Cambria,Times New Roman, Times, serif;`,
        texts: `NanumSquareNeo, sohne, Helvetica Neue, Helvetica, Arial, sans-serif`,
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};