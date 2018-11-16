const path = require('path');
const webpack = require('webpack');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const paths = require('react-scripts/config/paths');
// const rewireSvgLoader = require('./src/config/react-app-rewire-svg-sprite-loader');
/**
 * 合成一个决定路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir);
}
let baseUrl = '/xdnphb/';
let proxyData = {};
let urlList = [
  'common',
  'ade',
  'user',
  'pay',
  'aly',
  'knowledgepay',
  'account',
  'login',
  'flowPacket'
];
for (let i = 0, len = urlList.length; i < len; i++) {
  let str = urlList[i];
  let proxyPath = baseUrl + str;
  let proxyRewrite = '^' + proxyPath;

  if (str != 'common' && str != 'account') {
    proxyData[proxyPath] = {
      // target: 'http://localhost:209'+proxyPath,
      target: 'http://dev.a.newrank.cn' + proxyPath,
      changeOrigin: true,
      pathRewrite: {}
    };
  } else {
    proxyData[proxyPath] = {
      // target: 'http://localhost'+proxyPath,
      target: 'http://dev.main.newrank.cn' + proxyPath,
      changeOrigin: true,
      pathRewrite: {}
    };
  }

  proxyData[proxyPath].pathRewrite[proxyRewrite] = '';
}
// 配置打包之后的文件夹名称
paths.appBuild = path.join(path.dirname(paths.appBuild), 'distribution');
module.exports = (config, env) => {
  require('react-app-rewire-postcss')(config);
  config = rewireStyledComponents(config, env, {
    displayName: env === 'production' ? false : true
  });
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd-mobile', style: 'css' }],
    config
  );
  Object.assign(config.resolve.alias, {
    '@': resolve('src')
  });
  // nginx配置
  /**
   * location ^~ /distribution {
		 root   E:/workspace/react/react-distribution-mobile;
		 # root   E:/workspace/nuxt-distribution/dist;
		 try_files $uri $uri/ /distribution/index.html;
	 }
   */
  const protest = process.env['npm_config_protest'];
  // config.plugins = [
  //   ...config.plugins,
  //   new webpack.EnvironmentPlugin({
  //     PROD_TEST: !!protest
  //   })
  // ];
  // config.plugins = [
  //   ...config.plugins,
  //   new webpack.DefinePlugin({
  //     'process.env.PROD_TEST': JSON.stringify(!!protest)
  //   })
  // ];
  // config = rewireSvgLoader(config, env, { include: resolve('src/icons') });
  config.plugins = (config.plugins || []).concat(
    new webpack.DefinePlugin({
      'process.env.PROD_TEST': JSON.stringify(!!protest)
    })
  );
  // 配置outpath的publicPath
  config.output = {
    ...config.output,
    publicPath: process.env.NODE_ENV === 'prodution' ? '/distribution/' : '/'
  };
  // config.devtool =
  //   process.env.NODE_ENV === 'production'
  //     ? 'source-map'
  //     : 'cheap-module-eval-source-map';
  // console.log(config);
  // {
  //   test: /\.svg$/,
  //   loader: 'svg-sprite-loader,
  //   include: resolve('src/icons'),
  //   options: {
  //     symbolId: 'icon-[name]'
  //   }
  // }
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      include: resolve('src/icons/svg'),
      options: {
        symbolId: 'icon-[name]'
      }
    }
  ];
  return config;
};
