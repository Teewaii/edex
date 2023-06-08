/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#20B486',
        'Darkgreen': '#1A906B',
        'Herogreen': '#06241B',
        'Hovergreen': '#E9F8F3',
        'Popgreen': '#E9F8F3',
        'yellow': '#FFC27A',
        'Darkyellow': '#CAA67B',
        'Lightyellow': '#FFFAF5',
        'grey': '#889099',
        'blue': '#3461FD',

      },

      backgroundImage: {
        'SignUpbg': "url('../src/img/signup.png')",

      }

    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },

      center: true,
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

