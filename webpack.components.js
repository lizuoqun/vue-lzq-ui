const glob = require('glob')
const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')

const list = {};
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    files.forEach(item => {
        const component = item.split(/[/.]/)[2]
        list[component] = `./${item}`
    })
}

makeList('components/lib', list)

module.exports = {
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
    mode: 'development'
}