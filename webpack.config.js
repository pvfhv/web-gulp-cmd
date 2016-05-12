/**
 * Created by anchao on 2016/5/10.
 */
var path = require('path');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:4000',
        path.resolve(__dirname, 'scripts/main.js')
    ],
    resolve: {
        // alias: {
        //     'react': pathToReact,
        //     'react-dom': pathToReactDOM
        // }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/scripts/",
        filename: 'main.js',
        sourceMapFilename:'main.map'
    },
    devtool:"source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'stage-0', 'react'],
                compact: false
            }
        }]
        // noParse: [pathToReact, pathToReactDOM]
    },
    plugins: []
};