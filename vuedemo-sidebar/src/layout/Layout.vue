<template>
    <div class="app-wrapper">
        <SideBar class="sidebar-container"></SideBar>

        <div class="main-container">
            <NavBar></NavBar>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/layout/SideBar";
    import NavBar from "@/layout/NavBar";

    export default {
        name: "Layout",
        components: {
            SideBar,
            NavBar
        }
    }
</script>

<style scoped lang="scss" >
    $sideBarWidth: 210px;
    $menuBg:#304156;

    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;

        .sidebar-container {
            transition: width 0.28s;
            width: $sideBarWidth !important;
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
            margin-left: 210px;
            position: relative;
        }
    }
</style>