const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        //handling file types
        rules: [
        {
            test: /\.svg$/,
            use:'svg-inline-loader'
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(js)/,
            use:"babel-loader",
        }
        ]
    }, 
    //creating output file
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:'bundle.js',
    },
    //this plugin auto injects js in html
    plugins:[new HtmlWebpackPlugin()],
    mode: "development"

}

