<template>
    <div>
        <el-menu :default-active="this.$route.path"
                 router
                 class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 background-color="#304156"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 :collapse-transition="false">
            <el-menu-item index="/home">
                <svg-icon icon-class="db" />
                <span slot="title">数据库</span>
            </el-menu-item>
            <el-menu-item index="/svg/svgView">
                <svg-icon icon-class="social" />
                <span slot="title">svg</span>
            </el-menu-item>
            <el-submenu index="/test" >
                <template slot="title">
                    <svg-icon icon-class="operateLog" />
                    <span slot="title">测试</span>
                </template>
                <el-menu-item index="/test/test1" class="submenu-menuitem-dropdown">测试1</el-menu-item>
                <el-menu-item index="/test/test2" class="submenu-menuitem-dropdown">测试2</el-menu-item>
                <el-menu-item index="/test/test3" class="submenu-menuitem-dropdown">测试导航栏</el-menu-item>
            </el-submenu>
            <el-submenu index="/show" >
                <template slot="title">
                    <svg-icon icon-class="operateLog" />
                    <span slot="title">展示</span>
                </template>
                <el-menu-item index="/show/showContent" class="submenu-menuitem-dropdown">内容</el-menu-item>
                <el-menu-item index="/show/showResult" class="submenu-menuitem-dropdown">结果</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
            };
        },
        computed: {
            isCollapse(){
                return !this.$store.state.showSideBar
            },
        },
    }
</script>

<style scoped  lang="scss">
    .submenu-menuitem-dropdown {
        background-color: #1f2d3d !important;

        &:hover {
            // you can use $subMenuHover
            background-color: #001528 !important;
        }
    }

    .svg-icon {
        margin-right: 18px;
    }
</style>