module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#00bcd4', // Adjust to your preferred cyan
        },
        theme: {
          100: '#edffe8',
          200: '#a3f7bf',
          300: "#b2d1a9"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
