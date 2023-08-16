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
        'custom-green-text': '#11453B'
      }
    },
  },
  plugins: [],
}

