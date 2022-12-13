/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "pink-airbnb": "#FF5A60",
        "black-airbnb": "#2F2F2F",
        "cream-airbnb": "#F7DED4",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
});
