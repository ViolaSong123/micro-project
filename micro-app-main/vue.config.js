const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
    devServer: {
        port: 7777,
        open: true,
        disableHostCheck: true,
    },
};
