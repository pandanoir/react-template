module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: ['./src/app.jsx'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }],
    }
};
