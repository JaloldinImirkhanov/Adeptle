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
        base: "1212px",
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
      boxShadow: {
        base: " 7px 11px 24px rgba(21, 21, 22, 0.27)",
      },
    },
  },
  plugins: [],
};
