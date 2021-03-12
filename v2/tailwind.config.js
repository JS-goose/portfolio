// See https://tailwindcss.com/docs/configuration for details
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ["./src/**/*.js"],
  important: true,
  theme: {
    extend: {
      colors: {
        myPurple: "#421ED2",
        myRed: "#FF4945",
        myBlack: "#161514",
      },
    },
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms"), require("tailwindcss-pseudo-elements"), plugin(function ({ addUtilities }) {
    addUtilities(
      {
        '.empty-content': {
          content: "''",
        },
      },
      ['before']
    )
  })],
  variants: {
    extend: {
    },
    backgroundImage: [`responsive`, `hover`, `focus`],
    backgroundColor: [`responsive`, `hover`, `focus`, `active`, `before`],
    textColor: [`responsive`, `hover`, `focus`, `active`],
    borderColor: [`responsive`, `hover`, `focus`],
    borderWidth: [`responsive`],
    width: [`before`, `hover`],
    height: [`before`, `hover`],
    position: [`before`, `hover`],
    margin: [`before`, `hover`],
    transform: [`before`, `hover`],
    transition: [`before`, `hover`],
    scale: [`before`, `hover`]
  },
  corePlugins: {
    fontFamily: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
