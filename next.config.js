/* eslint-disable no-unused-vars */
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/theme/antd.less'), 'utf8')
);

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(path.resolve(__dirname, './styles/theme/antd.less'), 'utf-8');
fs.writeFileSync(
  path.resolve(__dirname, './styles/self-styles.less'),
  isDev ? `${devAntd}${stylesData}` : `${devAntd}${stylesData}`,
  'utf-8'
);

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (_file) => {};
}

module.exports = withCSS({
  cssModules: true,
  trailingSlash: true,
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
  cssLoaderOptions: {
    importLoaders: 1,
    modifyVars: themeVariables,
    localIdentName: '[local]_[hash:base64:5]',
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    })
  ),
});
