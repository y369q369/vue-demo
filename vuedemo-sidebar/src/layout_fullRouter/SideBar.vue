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
            <sidebar-item v-for="route in routes" :key="route.path" :item="route"></sidebar-item>
        </el-menu>
    </div>

</template>

<script>
    import SidebarItem from "./SidebarItem";

    export default {
        name: "SideBar",
        components: {SidebarItem},
        data() {
            return {
            };
        },
        comments: {
            SidebarItem
        },
        computed: {
            isCollapse() {
                return !this.$store.state.showSideBar
            },
            routes() {
                return this.$router.options.routes
            },
        },
    }
</script>