/**
 * The paths used in the webpack configuration.
 */
const path = require('path');

const rootPath = path.join(__dirname, './..');

module.exports = {
  rootPath,
  srcPath: path.resolve(rootPath, 'src'),
  buildPath: path.resolve(rootPath, 'build'),
  publicPath: path.resolve(rootPath, 'public'),
  nodeModulesPath: path.resolve(rootPath, 'node_modules'),
  packageJsonPath: path.resolve(rootPath, 'package.json'),
  doteEnvPath: path.resolve(rootPath, '.env'),
  srcIndexJsPath: path.resolve(rootPath, 'src/client.js'),
  buildStaticsPath: path.resolve(rootPath, 'build/assets'),
  buildCssPath: path.resolve(rootPath, 'build/static/app.css'),
  publicAddress: '0.0.0.0:3001', // '10.0.2.2:3001' - '0.0.0.0:3001'
};
