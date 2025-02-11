/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#010C0F",
        secondaryBlack: "#282828",
        primaryBg: "#FFF8E1",
        primaryOrange: "#FF6F00"
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        nunito: ["Nunito", "serif"]
      },
      screens:{
        xs: "375px",
      },
    },
  },
  plugins: [

  ],
}

