/** @type {import('tailwindcss').Config} */
import { outlineColor, primaryColor } from './src/utils/styles/color';
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'outlineColor': outlineColor,
        'primaryColor': primaryColor,
      }
    },
  },
  plugins: [],
}
