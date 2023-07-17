/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*. {js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#131221",
        "base-light": "#353D57",
        light: "#A9CAEF",
        primary: "#8181D7",
        secondary: "#0038FF",
        NameColor: "rgba(99, 94, 193, 1)",
        base2: "rgba(29, 29, 43, 1)",
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
