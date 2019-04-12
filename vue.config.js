var webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(process.env.apiUrl),
          'VUE_APP_DB_URL': JSON.stringify(process.env.VUE_APP_DB_URL)
        }
      })
    ]
  }
}
