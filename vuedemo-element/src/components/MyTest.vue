<template>
    <el-row>
        <el-col>
            <el-col :span="2" :offset="5" style="text-align: right"><el-button @click="getTextHeight">字体大小</el-button></el-col>
            <el-col :span="2" :offset="1"><el-input v-model="fontSize" placehold="fontSize" /></el-col>
            <el-col :span="2" :offset="1"><el-input v-model="content" placehold="content" /></el-col>
        </el-col>

    </el-row>
</template>

<script>
    import {getTextHeight} from '@/utlis/publicUtil'

    export default {
        name: "MyTest",
        data() {
            return {
                fontSize: 14,
                content: ''
            }
        },
        methods: {
            getTextHeight() {
                console.log("%s 对应长度为 : ", this.content, getTextHeight(this.content, this.fontSize))
                alert(`${this.content} 对应长度为 : ${getTextHeight(this.content, this.fontSize)}`)
            }
        }
    }
</script>

<style scoped>

</style>