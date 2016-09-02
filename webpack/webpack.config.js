module.exports = {
    devtool: "inline-sourcemap",
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                plugins: ['react-html-attrs', 'transform-class-properties', 'tranform-decorators-legacy']
            }
        ]
    }
}
