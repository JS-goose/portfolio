// See https://tailwindcss.com/docs/configuration for details
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ["./src/**/*.js"],
  important: true,
  theme: {
    extend: {
      colors: {
        myPurple: "#421ED2",
        myDarkPurple: '#200396',
        myDarkPurple10: 'rgba(32, 3, 150, 0.1)',
        myRed: "#fc000d",
        myDarkRed: '#d8000a',
        myBlack: "#161514",
        myLightGray: '#b0a8ba',
        myDarkGray: '#46434b'
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
  },
  corePlugins: {
    fontFamily: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
