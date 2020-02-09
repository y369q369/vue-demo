<template>
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in titleList" :key="item.path">
            <span v-if="index === titleList.length-1">{{item.meta.title}}</span>
            <a v-else :href="item.path">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data() {
            return {
                titleList: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                // only show routes with meta.title
                this.titleList = this.$route.matched.filter(item => item.meta && item.meta.title)
            },
        }
    }
</script>

<style scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 8px;
    }
</style>