module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0
    },
    precss: {},
    autoprefixer: {},
    // 'postcss-pxtorem': {
    //   rootValue: 750,
    //   unitPrecision: 5,
    //   propList: ['*'],
    //   selectorBlackList: [/^body$/],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0
    // }
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPercision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
