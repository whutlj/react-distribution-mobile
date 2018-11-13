const path = require('path');

const getChildrenRules = (loader) =>
  loader.use ||
  loader.oneOf ||
  (Array.isArray(loader.loader) && loader.loader) ||
  [];

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result;
  const rules = Array.isArray(rulesSource)
    ? rulesSource
    : getChildrenRules(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? {
            index,
            rules
          }
        : findIndexAndRules(getChildrenRules(rule), ruleMatcher))
  );
  return result;
};

const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);

  rules.splice(index, 0, value);
};

const fileLoaderRuleMatcher = (rule) =>
  rule.loader &&
  rule.loader.indexOf(`${path.sep}file-loader${path.sep}`) !== -1;

module.exports = function(config, env, options = {}) {
  console.log(config.module.rules[1].oneOf);
  const opt = Object.assign(
    {},
    {
      include: path.resolve(__dirname, '../src/assets/svg'),
      exclude: [/node_modules/],
      loaderOptions: { symbolId: 'icon-[name]' }
    },
    options
  );
  const svgSpriteLoader = {
    test: /\.svg$/,
    include: opt.include,
    exclude: opt.exclude,
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: opt.loaderOptions
      }
      // {
      //   loader: require.resolve('svgo-loader'),
      // },
    ]
  };

  addBeforeRule(config.module.rules, fileLoaderRuleMatcher, svgSpriteLoader);

  return config;
};
