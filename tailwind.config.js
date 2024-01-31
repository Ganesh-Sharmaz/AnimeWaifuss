/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '26rem',
      },
      colors: {
        'san': '#D4145A',
        'guine': '#FBB03B'
      },
      fontFamily: {
        'Beauty': ['Allura', 'cursive'],
        'Dance': [ 'Pacifico', 'cursive'],
      },
      scale: {
        '128': '2',
      },
      width: {
        '128': '500px',
      },

    },
  },
  plugins: [],
}

