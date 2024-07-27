/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#1d4ed8',
      amber: '#FEF#C7',
      forest: '#3c5f45',
      beige: '#FEFDED',
      leaf: '#c4d6c6',
      orange: '#FF204E',
      realBlack: '#1A1A1A',
      offWhite: '#f2f2f2'
    },
    extend: {
      fontSize: {
        'h1': 'calc(56px + 4vw)',
        'h2': 'calc(40px + 1vw)',
        'h3': 'calc(28px + 1vw)',
        'h4': 'calc(16px + 1vw)',
        'ingress': '1.5rem',
        'a': 'calc(18px + 1vw)',
        'button': 'calc(16px + 1vw)',
        'par': '1.2rem',
        'detail': '1rem'
      },


    },
  },
  plugins: [],
}

