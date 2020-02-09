<template>
    <div>
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 background-color="#304156"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 :collapse-transition="false">
            <el-submenu index="1" >
                <template slot="title">
                    <svg-icon icon-class="db" />
                    <span slot="title">数据库</span>
                </template>
                <el-menu-item index="1-1" class="submenu-menuitem-dropdown">选项1</el-menu-item>
                <el-menu-item index="1-2" class="submenu-menuitem-dropdown">选项2</el-menu-item>
                <el-menu-item index="1-3" class="submenu-menuitem-dropdown">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
                <template slot="title">
                    <svg-icon icon-class="operateLog" />
                    <span slot="title">操作日志</span>
                </template>
                <el-menu-item index="2" class="submenu-menuitem-dropdown">选项4</el-menu-item>
                <el-menu-item index="1-4-1" class="submenu-menuitem-dropdown">选项5</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>
                <svg-icon icon-class="profession" />
                <span slot="title">用户权限</span>
            </el-menu-item>
            <el-menu-item index="4">
                <svg-icon icon-class="schooling" />
                <span slot="title">集群</span>
            </el-menu-item>
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