module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF7000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
