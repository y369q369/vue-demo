<template>
    <div  class="login-container">
        <el-form ref="loginForm" :model="loginForm" autocomplete="on" class="login-form">

            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>

            <el-form-item prop="username">
                <el-input
                        v-model="loginForm.username"
                        prefix-icon="el-icon-user-solid"
                        placeholder="Username"
                        autocomplete="on"
                />
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                        v-model="loginForm.password"
                        prefix-icon="el-icon-lock"
                        placeholder="Password"
                        autocomplete="on"
                />
            </el-form-item>
            <el-button type="primary" style="width:100%;margin-bottom:30px;" >Login</el-button>
        </el-form>

        <el-dialog title="Or connect with" :visible.sync="showDialog">
            Can not be simulated on local, so please combine you own business simulation! ! !
            <br>
            <br>
            <br>
            <social-sign />
        </el-dialog>
    </div>

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

<style lang="scss">
    /* 修复input 背景不协调 和光标变色 */
    /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

    $bg:#283443;
    $light_gray:#fff;
    $cursor: #fff;


    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 35px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;

                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: $cursor !important;
                }
            }
        }

        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

<style lang="scss" scoped>
    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        overflow: hidden;

        .login-form {
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;

            .svg-container {
                padding: 6px 5px 6px 15px;
                color: #2d3a4b;
                vertical-align: middle;
                width: 30px;
                display: inline-block;
            }
        }

        .title-container {
            position: relative;

            .title {
                font-size: 26px;
                color: #fff;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }
    }
</style>