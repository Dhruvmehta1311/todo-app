/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        radio: "20px",
      },
      height: {
        radio: "20px",
      },
      colors: {
        veryLightGray: "hsl(0,0%,98%)",
        veryLightGrayishBlue: "hsl(236,33%,92%)",
        lightGrayishBlue: "hsl(233,11%,84%)",
        darkGrayishBlue: "hsl(236,9%,61%)",
        veryDarkGrayishBlue: "hsl(235,19%,35%)",
        linearGradient: "hsl(192,100%,67%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
