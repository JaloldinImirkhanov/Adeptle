/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        playfairDisplay: ["Playfair Display", "sans-serif"],
        sans3: ["Red Hat Display", "sans-serif"],
      },
      maxWidth: {
        base: "1440px",
      },
      colors: {
        brand: {
          darkBlue: "#2E294E",
          lightrose: "#FECACA",
          gray: {
            100: "#888888",
          },
        },
      },
      fontSize: {
        58: "58px",
      },
      lineHeight: {
        70: "70px",
      },
    },
  },
  plugins: [],
};
