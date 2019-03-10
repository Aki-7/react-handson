
const path = require('path');

module.exports = {
    entry: './src/index.tsx',

    mode : 'development',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },

    resolve: {
        extensions: ['.tsx','.js'],
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importloaders=1',
                    'postcss-loader'
                ]
            }
        ]
    }
}
