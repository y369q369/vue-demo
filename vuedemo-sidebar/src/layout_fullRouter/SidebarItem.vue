<template>
    <div v-if="!item.hidden">
        <template v-if="hasOneShow(item.children)">
            <template v-if="showRouter.meta.icon">
                <el-menu-item :index="showRouter.path">
                    <svg-icon :icon-class="showRouter.meta.icon" />
                    <span slot='title'>{{showRouter.meta.title}}</span>
                </el-menu-item>
            </template>
            <el-menu-item v-else :index="showRouter.path" class="submenu-menuitem-dropdown">
                {{showRouter.meta.title}}
            </el-menu-item>
        </template>

        <el-submenu v-else :index="item.path">
            <template v-if="item.meta" slot="title">
                <svg-icon :icon-class="item.meta.icon" />
                <span slot='title'>{{item.meta.title}}</span>
            </template>
            <sidebar-item
                    v-for="child in item.children"
                    :key="child.path"
                    :item="child"
            />
        </el-submenu>
    </div>
</template>

<script>
    export default {
        name: "SidebarItem",
        props: {
            // current route object
            item: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                showRouter: '',         // el-menu-item标签 实际展示的节点
            }
        },
        methods: {
            /**
             * 判断是否为单条展示：      1. 没有子节点且自身有meta属性展示自身（* 确保router中没有特例：没有子节点且自身也没有meta属性）
             *                         2. 有子节点，去掉hidden属性后的值只有一个子节点且有meta属性展示子节点
             */
            hasOneShow(children = []) {
                const showingChildren = children.filter(child => {
                    if (child.hidden) {
                        return false
                    } else {
                        return true
                    }
                })

                let flag = false;
                if (showingChildren.length === 0) {
                    if (this.item.meta) {
                        // window.console.log(this.item);
                        this.showRouter = this.item
                        flag = true;
                    }
                } else if (showingChildren.length === 1) {
                    if (showingChildren[0].meta) {
                        this.showRouter = showingChildren[0]
                        flag = true;
                    }
                }
                return flag;
            },
            test() {
                window.console.log(this.showRouter);
            }
        }
    }
</script>

<style lang="scss">
    .submenu-menuitem-dropdown {
        background-color: #1f2d3d !important;

        &:hover {
         // you can use $subMenuHover
         background-color: #001528 !important;
         }
    }

    .svg-icon {
        margin-right: 18px;
        margin-left: 2px;
    }

    .el-menu--collapse .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
        display: none;
    }
</style>