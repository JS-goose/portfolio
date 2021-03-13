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
    backgroundImage: [`responsive`, `hover`, `focus`],
    backgroundColor: [`responsive`, `hover`, `focus`, `active`, `before`],
    textColor: [`responsive`, `hover`, `focus`, `active`],
    borderColor: [`responsive`, `hover`, `focus`],
    borderWidth: [`responsive`],
    width: [`responsive`, `before`, `hover`],
    height: [`responsive`, `before`, `hover`],
    position: [`responsive`, `before`, `hover`],
    margin: [`responsive`, `before`, `hover`],
    padding: [`responsive`, `before`, `hover`],
    transform: [`responsive`, `before`, `hover`],
    rotate: [`responsive`, `before`, `hover`],
    skew: [`responsive`, `before`, `hover`]
  },
  corePlugins: {
    fontFamily: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
