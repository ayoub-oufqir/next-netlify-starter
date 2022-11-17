const { BsLinkedin } = require('react-icons/bs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        102: '102%',
      },
      colors:{
        'LinkedinBlue': '#0077b5',
        'GreenTitle': '#0e8477',
      },
      fontFamily:{
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}