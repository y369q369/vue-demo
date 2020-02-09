<template>
    <div class="navbar">
        <div class="shrink-container"  @click="changeDent">
            <svg-icon :icon-class="dent" />
        </div>
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container"></breadcrumb>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";

    export default {
        name: "NavBar",
        components: {Breadcrumb},
        data() {
            return {
                dent: this.$store.getters.getSideBar,
            }
        },
        comments: {
            Breadcrumb,
        },
        methods:{
            changeDent() {
                this.dent = this.dent === 'outdent' ? 'indent' : 'outdent';
                this.$store.commit('setSideBar', this.dent === 'outdent');
            },
        }
    }
</script>

<style scoped lang="scss">
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

        .shrink-container {
            line-height: 46px;
            height: 100%;
            float: left;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;
            padding: 0 15px;

            &:hover {
                 background: rgba(0, 0, 0, .025)
             }
        }

        .breadcrumb-container {
            float: left;
        }
    }
</style>