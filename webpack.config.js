//webpack.config.js
var path = require("path");
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"], //preset shayad .babelrc file bana ta hai pehle [es2015,react] tha
            },
          },
        ],
      },
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\.css$/, use: "style-loader!css-loader" },
      //   {
      //     test: /.jsx?$/,
      //     //    loader: 'babel-loader',
      //     exclude: /node_modules/,
      //     //    query: {
      //     //     presets: ["@babel/preset-env"]
      //     //    }
      //     use: [
      //       {
      //         loader: "babel-loader",
      //         options: {
      //           presets: ["@babel/preset-env", "@babel/preset-react"], //preset shayad .babelrc file bana ta hai pehle [es2015,react] tha
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     test: /\.css$/,
      //     loader: "style-loader!css-loader",
      //   },
    ],
  },
};
