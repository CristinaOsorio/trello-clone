/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
      },
      container: {
        screens: {
          mobile: "600px",
          tablet: "900px",
          desktop: "1200px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
