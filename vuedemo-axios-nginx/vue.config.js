module.exports = {
    // 解决打包后页面为空的坑
    publicPath: './',

    devServer: {
        proxy: {
            '/demo2': {
                target: 'http://localhost:8083',          //  请求 /demo2/xxx 会被代理到  http://localhost:8083/demo2/xxx，
                                                          //  配合Axios.defaults.baseURL默认基础路由使用
            }
        }
    }
}