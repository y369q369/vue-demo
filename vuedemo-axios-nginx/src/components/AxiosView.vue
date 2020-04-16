<template>
    <div>
        <button @click="simpleGet">简单get</button>
        <button @click="test">test</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "AxiosView",
        methods: {
            simpleGet() {
                axios.get('/DEMO/demo2/restTemplate/restTemplateGet1')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            test() {
                let data1 = '1234';
                let name = 'alex';
                let password = '123456';

                let str1 = `name:${name},data:${data1},password:${password}`;  //es6中使用字符串格式化的方法进行拼接
                console.log(str1)
            }
        },
    }
</script>

<style scoped>

</style>