<template>
    <div style="margin-left: 310px; width: 1300px; text-align: center; background: silver">
        <p>
            <button @click="addNode('topic')">addTopic</button>
            <button @click="addNode('DB')">addDB</button>
            <button @click="show">show</button>
            <button @click="hide">hide</button>
        </p>
        <div id="demo"  @click="closeContextMenu"></div>
        <ContextMenu />
    </div>
</template>

<script>
    import G6 from "@/global/g6";
    import {topic, DB} from '@/global/g6/config/materials'
    import ContextMenu from './containers/ContextMenu'

    export default {
        name: "G6-Example",
        data() {
            return {
                graphEditor: {}
            }
        },
        components: {
            ContextMenu
        },
        created() {
            this.Utils.bus.$on('editor:deleteElement', this.deleteGraphElement)
            this.Utils.bus.$on('editor:addNode', this.addNode)
        },
        mounted() {
            this.initGraph();
        },
        methods: {
            // 初始化 graph
            initGraph() {
                this.graphEditor = new G6.Graph({
                    container: 'demo',                     // 指定图画布的容器 id
                    // 画布宽高
                    width: 1200,
                    height: 500,
                    defaultNode: {
                        anchorPoints: [
                            [0.5, 0],
                            [1, 0.5],
                            [0.5, 1],
                            [0, 0.5]
                        ],
                    },
                    // 边在默认状态下的样式配置（style）和其他配置
                    defaultEdge: {
                        style: {
                            opacity: 0.4,                       // 边透明度
                            stroke: '#000000',                     // 边描边颜色
                            lineWidth: 3,                       // 节点描边粗细
                            endArrow: {
                                path: 'M 0,0 L 10,4 L 6,0 L 10,-4 Z',
                                fill: '#333',
                            },
                        },
                        labelCfg: {
                            autoRotate: true,                       // 边上的标签文本根据边的方向旋转
                        },
                    },
                    modes: {
                        'edit': ['add-edge', 'show-contextMenu', 'drag-canvas', 'drag-node',],
                    },
                });

                // 渲染图
                this.graphEditor.render();

                this.graphEditor.setMode('edit');

                this.graphEditor.on('showContextmenu', (data) => {
                    this.Utils.bus.$emit("contextmenu/open", data)
                })

            },

            // 添加节点
            addNode(type) {
                switch (type) {
                    case 'topic':
                        this.graphEditor.addItem('node', topic(this.graphEditor.getNodes().length));
                        break;
                    case 'DB':
                        this.graphEditor.addItem('node', DB(this.graphEditor.getNodes().length));
                        break;
                }
            },

            deleteGraphElement(item) {
                console.log("item ：", item)
                this.graphEditor.removeItem(item)
            },

            closeContextMenu() {
                this.Utils.bus.$emit("contextmenu/close")
            },

            show() {
                this.Utils.bus.$emit("contextmenu/open")
            },
            hide() {
                this.Utils.bus.$emit("contextmenu/close")
            },

        }
    }
</script>

<style scoped>

</style>