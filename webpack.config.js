const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /welcome.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'welcome.html'
                        }
                    }
                ]
            },
            {
                test: /experience.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'experience.html'
                        }
                    }
                ]
            },          
            {
                test: /portfolio.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'portfolio.html'
                        }
                    }
                ]
            }

        ]
    }
};
