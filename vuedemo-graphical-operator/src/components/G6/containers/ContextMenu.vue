<template>
    <div class="context-menu" :style="contextMenuStyle" v-show="isShow">
        <button @click="handleToolClick(item.operator)"  v-for="(item, index) in operations" :key="index">{{item.label}}</button>
    </div>
</template>

<script>
    import {topicOperation, DBOperation, edgeOperation} from "@/components/G6Test/config/contextMenuOperation";

    export default {
        name: "ContentMenu",
        data() {
            return {
                isShow: false,
                contextMenuStyle: {},
                options: {},
                operations: []
            }
        },
        created() {
            this.Utils.bus.$on("contextmenu/open", this.doShow);
            this.Utils.bus.$on("contextmenu/close", this.doHide);
        },
        methods: {
            doShow(data) {
                this.options = data;
                this.handleOperations();
                this.handleContextMenuStyle();
                this.isShow = true;
            },

            doHide() {
                this.isShow = false
            },

            handleOperations() {
                switch (this.options.element.getModel().belong) {
                    case 'topic':
                        this.operations = topicOperation;
                        break;
                    case "DB":
                        this.operations = DBOperation;
                        break;
                    default:
                        this.operations = edgeOperation;
                }
            },

            handleContextMenuStyle() {
                let style = {};
                if(!this.options) {
                    return style;
                }

                style['left'] = this.options.x + 'px'
                style['top'] = this.options.y + 'px'




                // let x = this.options.x !== undefined ? (parseInt(this.options.x) > 0 ? parseInt(this.options.x) : 0) : 0
                // let y = this.options.y !== undefined ? (parseInt(this.options.y) > 0 ? parseInt(this.options.y) : 0) : 0
                // // 判断是否超出边界
                // if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                //     let winHeight = document.documentElement.clientHeight
                //     let winWidth = document.documentElement.clientWidth
                //     let elHeight = this.$el.clientHeight
                //     let elWidth = this.$el.clientWidth
                //     if (x + elWidth > winWidth) {
                //         style['right'] = '10px'
                //     } else {
                //         style['left'] = x + 'px'
                //     }
                //     if (y + elHeight > winHeight) {
                //         style['bottom'] = '42px'
                //     } else {
                //         style['top'] = y + 'px'
                //     }
                // }
                this.contextMenuStyle = style

            },

            handleToolClick(operation) {
                this.isShow = false;
                switch (operation) {
                    case 'delete':
                        this.Utils.bus.$emit('editor:deleteElement', this.options.element);
                        break;
                    case "copy":
                        console.log("copy");
                        this.Utils.bus.$emit('editor:addNode', this.options.element.getModel().belong);
                        break;
                    default:
                        console.log("default");
                }
            }
        }
    }
</script>

<style scoped>
    .context-menu {
        position: absolute;
        min-width: 120px;
        width: auto !important;
        z-index: 9999;
        background: #FFF;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
        padding: 5px 0;
    }
</style>