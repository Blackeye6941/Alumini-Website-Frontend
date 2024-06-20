/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm : '480px',
      md : '720px',
      lg : '976px',
      xl : '1440px'
    },
    fontFamily: {
      mono : ['Monospace'],
    },
    extend: {},
  },
  plugins: [],
}

