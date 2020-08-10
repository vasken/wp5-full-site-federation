const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8083/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8083,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
  	new ModuleFederationPlugin({
  		name: "checkout",
  		library: { type: "var", name: "checkout" },
  		filename: "remoteEntry.js",
  		remotes: {
  			home:  "home",
  			search: "search",
  			checkout: "checkout"
  		},
  		exposes: {
  			'./products' : './src/products',
  		},
  		shared: [
  			"react",
  			"react-dom",
  			"react-bootstrap",
  			"react-bootstrap-icons",
  			"react-query",
  			"react-redux",
  			"redux"
  		]
  	}),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
