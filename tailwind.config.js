/** @type {import('tailwindcss').Config} */
import textStroke from 'tailwindcss-text-stroke'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya", "sans-serif"],
      },
      colors: {
        yellow: "#FDC835",
        silver: "#C2C2C2",
        platin: "#E6E8E6",
      },
      screens: {
        xs: "0px", //0 a 639
        sm: "640px", // 640 a 767
        md: "768px", //768 a 1023
        lg: "1024px", //1024 a 1279
        xl: "1280px", //1280 a 1882
        xxl: "1883px", 
      },
    },
  },
  plugins: [
    textStroke
  ],
};
