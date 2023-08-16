/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green-bg': '#11453B',
      },
      textColor: {
        'custom-green-text': '#11453B',
        'custom-green-heading-text': '#515251',
        'custom-red-text': '#EA4E4B',
        'custom-black-text': '#292A29'

      }
    },
  },
  plugins: [],
}

