const path = require('path')

// resolve定义一个绝对路径获取函数
function resolve(dir) {

    return path.join(__dirname, dir)
}

module.exports = {
    // vue-cli3中默认已经配了对svg处理的规则,默认使用 file-loader
    chainWebpack(config) {
        // 排除file-loader对我们iconFonts文件夹的.svg文件处理
        config.module
            .rule('svg')
            .exclude.add(resolve('src/iconFonts'))
            .end()
        // 设置svg-sprite-loader专门处理iconFonts目录中的svg
        config.module
            .rule('iconFonts')
            .test(/\.svg$/)
            .include.add(resolve('src/iconFonts'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}

