module.exports = {
    debug: true,
    devtool: "eval-source-map",
    entry: {
        app: ["webpack/hot/dev-server", "./app/app.js"]
    },
    output: {
        filename: "bundle.js",
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader?experimental&comments=false"
        }],
        preLoaders: [
        {
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    }
};
