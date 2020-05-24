const path = require('path')

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, '../'),
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  output: {
    filename: '[id].[name].[chunkhash].js',
    chunkFilename: '[id].[name].[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: [{ loader: '@ngtools/webpack' }] },
      {
        test: /\.s[ac]ss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  federationModuleConfig: {
    filename: 'remoteEntry.js',
    shared: [
      '@angular/core',
      '@angular/common',
      '@angular/router',
      '@ngrx/store',
      '@ngrx/effects',
      '@angular/material/toolbar',
      '@angular/material/card',
      '@angular/material/button',
      '@angular/material/tabs',
      '@angular/material/form-field',
      '@angular/material/select',
      '@angular/material/dialog',
      '@angular/flex-layout'
    ]
  },
  angularConfigPlugin: {
    skipCodeGeneration: true,
    directTemplateLoading: true
  }
}
