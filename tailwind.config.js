/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*. {js,jsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDC835",
        silver: "#C2C2C2",
        platin: "#E6E8E6",
      },
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
module.exports.colors = module.exports.theme.extend.colors;
