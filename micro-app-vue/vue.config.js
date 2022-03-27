const path = require('path');
const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        port: 7771,
        disableHostCheck: true,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@src': path.resolve(__dirname, 'src'),
                '@pages': path.resolve(__dirname, 'src/pages'),
            }
        },
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        }
    }

}
