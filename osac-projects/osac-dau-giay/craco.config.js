const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    presets: [['@babel/preset-react', {runtime: 'automatic', importSource: '@emotion/react'}]],
    plugins: ['@emotion/babel-plugin']
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#fa8c16'},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
