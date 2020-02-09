<template>
    <div class="navbar">
        <div class="hamburger-container"  @click="changeDent">
            <svg-icon :icon-class="dent" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                dent: this.$store.getters.getSideBar,
            }
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

        .hamburger-container {
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
    }
</style>