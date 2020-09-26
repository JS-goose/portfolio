// See https://tailwindcss.com/docs/configuration for details
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
  plugins: [require("@tailwindcss/custom-forms")],
  variants: {
    backgroundImage: [`responsive`, `hover`, `focus`],
    backgroundColor: [`responsive`, `hover`, `focus`, `active`],
    textColor: [`responsive`, `hover`, `focus`, `active`],
    borderColor: [`responsive`, `hover`, `focus`],
    borderWidth: [`responsive`],
  },
  corePlugins: {
    fontFamily: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
