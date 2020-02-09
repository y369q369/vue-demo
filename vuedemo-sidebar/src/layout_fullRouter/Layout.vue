<template>
    <div :class="showSide" class="app-wrapper">
        <SideBar class="sidebar-container"></SideBar>

        <div class="main-container">
            <NavBar></NavBar>
            <router-view :key="this.$route.path" />
        </div>
    </div>
</template>

<script>
    import SideBar from "./SideBar";
    import NavBar from "./NavBar";

    export default {
        name: "Layout_hasRouter",
        components: {
            SideBar,
            NavBar
        },
        computed: {
            showSide() {
                return {
                    hideSidebar: !this.$store.state.showSideBar,
                }
            }
        }
    }
</script>

<style scoped lang="scss" >
    $showSideBarWidth: 210px;
    $hideSideBarWidth: 54px;
    $menuBg:#304156;

    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;

        .sidebar-container {
            width: $showSideBarWidth !important;
            background-color: $menuBg;
            height: 100%;
            position: fixed;
            font-size: 0px;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
        }

        .main-container {
            min-height: 100%;
            transition: margin-left .28s;
            margin-left: $showSideBarWidth;
            position: relative;
        }
    }

    .hideSidebar {
        .sidebar-container {
            width: $hideSideBarWidth !important;

        }

        .main-container {
            margin-left: $hideSideBarWidth;
        }
    }
</style>