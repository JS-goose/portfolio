// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  important: true,
  theme: {
    extend: {
      colors: {
        myPurple: '421ED2',
        myRed: 'FF4945',
        myBlack: '161514',
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
