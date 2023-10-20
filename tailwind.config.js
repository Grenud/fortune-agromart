/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp .5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }
      },
    },
    colors: {
      'primary': "#00d563",
      'primary-hover': "#40df8a",
      'darkText': "#202020",
      'lightText': "#ffffff",
    }
  },
  plugins: [],
}