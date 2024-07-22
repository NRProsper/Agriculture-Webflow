/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        tail: ["Yellowtail", "cursive"],
        sans: ["Open Sans", "sans-serif"]
      },
      colors: {
        darkGreen: "#274C5B",
        lightGreen: "#7EB693",
        yellow: "#EFD372",
        gray: "#D4D4D4",
        neutral: "#F9F8F8",
        veryLightGray: "#EFF6F1",
        darkGray: "#525C60",
      }
    },
  },
  plugins: [],
}

