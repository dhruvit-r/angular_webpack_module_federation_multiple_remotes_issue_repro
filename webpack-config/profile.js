const path = require('path')
const _ = require('lodash')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const common = require('./common')

const shopUiHomeConfig = () => ({
  ..._.pick(common, ['mode', 'context', 'resolve', 'module']),
  entry: [
    './libs/profile/src/index.ts'
  ],
  output: {
    ...common.output,
    publicPath: 'http://127.0.0.1:10000/',
    path: path.join(__dirname, '../dist/apps/ui/profile-feature'),
  },
  plugins: [
    new ModuleFederationPlugin({
      ...common.federationModuleConfig,
      name: 'profile_feature',
      library: { type: 'var', name: 'profile_feature' },
      exposes: {
        profile_module: './libs/profile/src/lib/profile.module'
      },
    }),
    new AngularCompilerPlugin({
      ...common.angularConfigPlugin,
      tsConfigPath: path.resolve(
        __dirname,
        '../libs/profile/tsconfig.lib.json'
      ),
      sourceMap: true,
      entryModule: path.resolve(
        __dirname,
        '../libs/profile/src/lib/profile.module#ProfileModule'
      )
    }),
  ]
})

module.exports = shopUiHomeConfig