const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
              template: "./src/index.html" //source html
        }),

    ]
}
