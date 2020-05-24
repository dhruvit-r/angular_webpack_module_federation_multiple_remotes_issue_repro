const path = require('path')
const _ = require('lodash')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const common = require('./common')

const shopUiHomeConfig = () => ({
  ..._.pick(common, ['mode', 'context', 'resolve', 'module']),
  entry: [
    './libs/shop/src/index.ts'
  ],
  output: {
    ...common.output,
    publicPath: 'http://127.0.0.1:9000/',
    path: path.join(__dirname, '../dist/apps/ui/shop-feature')
  },
  plugins: [
    new ModuleFederationPlugin({
      ...common.federationModuleConfig,
      name: 'shop_feature',
      library: { type: 'var', name: 'shop_feature' },
      exposes: {
        shop_module: './libs/shop/src/lib/shop.module'
      }
    }),
    new AngularCompilerPlugin({
      ...common.angularConfigPlugin,
      tsConfigPath: path.resolve(
        __dirname,
        '../libs/shop/tsconfig.lib.json'
      ),
      sourceMap: true,
      entryModule: path.resolve(
        __dirname,
        '../libs/shop/src/lib/shop.module#ShopModule'
      )
    })
  ]
})

module.exports = shopUiHomeConfig
