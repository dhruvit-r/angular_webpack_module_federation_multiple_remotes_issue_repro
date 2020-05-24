const path = require('path')
const _ = require('lodash')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const common = require('./common')

const shellConfig = () => ({
  ..._.pick(common, ['mode', 'context', 'resolve', 'module']),
  entry: {
    main: [
      './apps/shell/src/main.ts',
      './apps/shell/src/polyfills.ts'
    ],
    styles: [
      './apps/shell/src/styles.ts',
      './apps/shell/src/styles.scss'
    ]
  },
  output: {
    ...common.output,
    publicPath: 'http://127.0.0.1:8000/',
    path: path.join(__dirname, '../dist/apps/ui/shell')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      remotes: {
        shop_feature: 'shop_feature',
        profile_feature: 'profile_feature'
      },
      shared: common.federationModuleConfig.shared
    }),
    new AngularCompilerPlugin({
      ...common.angularConfigPlugin,
      tsConfigPath: path.resolve(
        __dirname,
        '../apps/shell/tsconfig.app.json'
      ),
      sourceMap: true,
      entryModule: path.resolve(
        __dirname,
        '../apps/shell/src/app/app.module#AppModule'
      )
    }),
    new HtmlWebpackPlugin({
      template: './apps/shell/src/index.html'
    })
  ]
})

module.exports = shellConfig
