/** @type {import('tailwindcss').Config} */
export default {
  //will look for tailwind, on any js,ts,jsx,tsx files.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      //for the details page
      //70(L) 30(R)
    gridTemplateColumns: {
      '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

