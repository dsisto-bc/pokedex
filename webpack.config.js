const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
		publicPath: "/",
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "build/styles.css" }),
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/pokeball.ico",
		}),
	],
	target: ["web", "es5"],
	devServer: {
		port: "4269",
		static: "public",
		open: true,
		hot: true,
		liveReload: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js",
			".jsx",
			".json",
			".scss",
			".sass",
			".css",
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader",
				],
			},
			{
				test: /\.(sass|scss)$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i,
				exclude: /node_modules/,
				type: "asset/resource",
			},
		],
	},
};
