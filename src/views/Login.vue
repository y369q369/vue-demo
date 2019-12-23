<template>
    <el-form ref="loginForm" :model="loginForm" autocomplete="on" label-width="20%" style="width: 60%">
        <el-form-item label="用户名">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="loginForm.password" placeholder="请输入密码">
            </el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
            }
        },
    }
</script>

<style scoped>
    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        overflow: hidden;
    }
</style>