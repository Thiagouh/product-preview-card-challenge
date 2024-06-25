/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      '2xsm': '449px',
      'sm': '740px',
      'md': '900px',
      'lg': '1140px',
    },
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'montserrat': ['Montserrat', 'serif'],
      },
      width: {
        '5/12': '48%',
        '4/12': '37%',
      },
      letterSpacing: {
        'widest': '0.3em',
      },
      fontSize: {
        '2xl': '1.895rem',
      }
    }
  },
  plugins: []
}

