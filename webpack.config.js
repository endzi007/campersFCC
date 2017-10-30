const path = require("path");
module.exports = {
    entry: './script/app.js',
    output: {
        path: path.join(__dirname, "./script"),
        filename: "bundle.js"
    }, 
    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};