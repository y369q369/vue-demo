module.exports = {
    // 多页面设置
    pages: {
        index: {
            // 页面入口 entry for the page
            entry: './src/index/main.js',
            // 页面模板 the source template
            template: './public/index.html',
            // build时输出的文件名
            filename: 'index.html',
            // 在这个页面中包含的块，默认情况下会包含 chunks to include on this page, by default includes
            // 提取出来的通用 chunk 和 vendor chunk extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            // 页面入口 entry for the page
            entry: './src/login/login.js',
            // 页面模板 the source template
            template: './public/login.html',
            // build时输出的文件名
            filename: 'login.html',
            // 在这个页面中包含的块，默认情况下会包含 chunks to include on this page, by default includes
            // 提取出来的通用 chunk 和 vendor chunk extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    }
}