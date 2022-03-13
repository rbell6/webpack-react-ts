import path from 'path';
import { cwd } from 'process';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(cwd(), 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		compress: true,
		port: 9000
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'assets': path.resolve(cwd(), 'assets')
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
};