/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontSize: {
        'h1': '6.2em',
        'h2': 'max(4.2rem, 4.2vw)',
        'h3': 'max(2rem, 2.222vw)',
        'h4': '1.6em',
        'ingress': '1.8em',
        'a': '1.2em',
        'button': '1.4em',
        'par': 'max(1.4rem, 1.111vw)'
      },

      color: {
        blue: '#1d4ed8',
        amber: '#FEF#C7'
      }
    },
  },
  plugins: [],
}

