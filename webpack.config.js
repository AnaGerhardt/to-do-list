var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: ['babel-loader', 'eslint-loader'] },
            {
                test: /\.(css)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                }]
            },
            { test: /\.tsx$/, use: 'ts-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    }
}