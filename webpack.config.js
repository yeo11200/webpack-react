const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

const prod = process.env.NODE_ENV === 'production';
module.exports = {
	devServer: {
		port: 3000,
		hot: true,
		https: {
			key: fs.readFileSync('cert.key'),
			cert: fs.readFileSync('cert.crt'),
			ca: fs.readFileSync('ca.crt'),
		},
	},
	mode: prod ? 'production' : 'development',
	devtool: prod ? 'hidden-source-map' : 'eval',
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader'],
			},
			{
				test: /.(sass|scss)$/,
				use: [{ loader: 'sass-loader' }],
			},
		],
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
