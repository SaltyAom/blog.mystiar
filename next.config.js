const path = require('path')

const withCSS = require("@zeit/next-css")
const withFonts = require("next-fonts")

module.exports = withFonts(
    withCSS({
        webpack (config, options) {
            config.resolve.alias['react'] = 'preact/compat'
            config.resolve.alias['react-dom'] = 'preact/compat'

            config.resolve.alias['components'] = path.join(__dirname, 'components')
            config.resolve.alias['css'] = path.join(__dirname, 'static/css')
            config.resolve.alias['static'] = path.join(__dirname, 'static')
            config.resolve.alias['stores'] = path.join(__dirname, 'stores')

            return config
        }
    })
);