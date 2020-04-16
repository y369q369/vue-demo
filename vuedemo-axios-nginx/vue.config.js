module.exports = {

    devServer: {
        proxy: {
            '/DEMO': {                                     //  TOPIC
                target: 'http://localhost:8083',
                pathRewrite:{
                    '^/DEMO':''
                }
            },
        }
    },

}

