const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: dev ? 'eval-cheap-module-source-map' : 'source-map',
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
}
