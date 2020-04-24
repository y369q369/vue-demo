<template>
    <div style="margin-left: 310px; width: 1300px; text-align: center">
        <p>
            <button @click="addNode">addNode</button>
            <button @click="addEdge">addEdge</button>
        </p>
        <div id="demo"></div>
    </div>
</template>

<script>
    import G6 from '@antv/g6'

    export default {
        name: "G6-Demo",
        data() {
            return {
                graph: {},
                graphData: {},
                graphModel: '',
                NodeNum: 3,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.graphData = {
                    // 点集
                    nodes: [
                        {
                            id: 'node1',                // 节点的唯一标识
                            type: 'rect',               // 元素的图形, 默认为圆形
                            x: 100,                     // 节点横坐标
                            y: 200,                     // 节点纵坐标
                            size: 40,                   // 元素的大小
                            label: '起始点',            // 节点文本
                            style: {                    // 包裹样式属性的字段 style 与其他属性在数据结构上并行
                                fill: 'rgba(53,190,182,0.96)',                          // 样式属性，元素的填充色
                                stroke: '#882a7e',                                      // 样式属性，元素的描边色
                                // ...                                                  // 其他样式属性
                            }
                        },
                        {
                            id: 'node2',
                            x: 300,
                            y: 200,
                            label: '目标点',
                        },
                    ],
                    // 边集
                    edges: [
                        // 表示一条从 node1 节点连接到 node2 节点的边
                        {
                            source: 'node1',                    // 起始点 id
                            target: 'node2',                    // 目标点 id
                            label: '我是连线',                  // 边的文本
                        },
                    ],
                };

                this.graph = new G6.Graph({
                    container: 'demo',                     // 指定图画布的容器 id
                    // 画布宽高
                    width: 1200,
                    height: 800,
                    // 节点在默认状态下的样式配置（style）和其他配置
                    defaultNode: {
                        type: 'rect',                           // 元素的图形设为矩形，  默认为原形
                        // ...                                  // 节点的其他配置
                        // 节点样式配置
                        style: {
                            width: 200,
                            height: 50,
                            fill: '#4d9eb3',                  // 节点填充色
                            stroke: '#35beb6',                     // 节点描边色
                            lineWidth: 1,                       // 节点描边粗细
                        },
                        // 节点上的标签文本配置
                        labelCfg: {
                            // 节点上的标签文本样式配置
                            style: {
                                fill: '#fff',                   // 节点标签文字颜色
                            },
                        },
                    },
                    // 边在默认状态下的样式配置（style）和其他配置
                    defaultEdge: {
                        // ...                                  // 边的其他配置
                        // 边样式配置
                        style: {
                            // opacity: 0.6,                       // 边透明度
                            stroke: '#5436be',                     // 边描边颜色
                            endArrow: {
                                // 自定义箭头指向(0, 0)，尾部朝向 x 轴正方向的 path
                                // path: 'M 0,0 L 20,10 L 20,-10 Z',
                                path: 'M 0,0 L 10,4 L 6,0 L 10,-4 Z',
                                fill: '#304156',
                            },
                        },
                        // 边上的标签文本配置
                        labelCfg: {
                            autoRotate: true,                   // 边上的标签文本根据边的方向旋转
                        },
                    },
                    // 节点不同状态下的样式集合
                    nodeStateStyles: {
                        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
                        hover: {
                            fill: 'blue',
                        },
                        // 鼠标点击节点，即 click 状态为 true 时的样式
                        click: {
                            stroke: '#000',
                            lineWidth: 3,
                        },
                    },
                    // 边不同状态下的样式集合
                    edgeStateStyles: {
                        // 鼠标点击边，即 click 状态为 true 时的样式
                        click: {
                            stroke: 'blue',
                        },
                    },
                    modes: {
                        default: [
                            'drag-node',                            // 允许拖拽节点
                            'click-add-edge',
                            'click-select',
                            {
                                type: 'tooltip',                    // 提示框
                                formatText(model) {
                                    // 提示框文本内容
                                    const text = 'label: ' + model.label + '<br/> id: ' + model.id;
                                    return text;
                                },
                            },
                        ],
                        addEdge: ['click-add-edge', 'click-select'],
                    },
                });

                this.registerBehavior();

                // 读取数据
                this.graph.data(this.graphData);
                // 渲染图
                this.graph.render();

                this.event();
            },

            addNode() {
                // Add a new node
                let nodeNum = this.graph.cfg.nodes.length;
                this.graph.addItem('node', {
                    x: 50 * nodeNum,
                    y: 100,
                    id: `node-${nodeNum}`, // Generate the unique id
                    label: `topic-${nodeNum}`
                });
            },

            addEdge() {
                this.graph.setMode('addEdge');
            },

            // 注册 自定义behavior
            registerBehavior() {
                // Register a custom behavior: click two end nodes to add an edge
                G6.registerBehavior('click-add-edge', {
                    // Set the events and the corresponding responsing function for this behavior
                    getEvents() {
                        return {
                            'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
                            mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
                            'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
                        };
                    },
                    // The responsing function for node:click defined in getEvents
                    onClick(ev) {
                        const self = this;
                        const node = ev.item;
                        const graph = self.graph;
                        // The position where the mouse clicks
                        const point = { x: ev.x, y: ev.y };
                        const model = node.getModel();
                        if (self.addingEdge && self.edge) {
                            graph.updateItem(self.edge, {
                                target: model.id,
                            });

                            self.edge = null;
                            self.addingEdge = false;
                        } else {
                            // Add anew edge, the end node is the current node user clicks
                            self.edge = graph.addItem('edge', {
                                source: model.id,
                                target: point,
                            });
                            self.addingEdge = true;
                        }
                    },
                    // The responsing function for mousemove defined in getEvents
                    onMousemove(ev) {
                        const self = this;
                        // The current position the mouse clicks
                        const point = { x: ev.x, y: ev.y };
                        if (self.addingEdge && self.edge) {
                            // Update the end node to the current node the mouse clicks
                            self.graph.updateItem(self.edge, {
                                target: point,
                            });
                        }
                    },
                    // The responsing function for edge:click defined in getEvents
                    onEdgeClick(ev) {
                        const self = this;
                        const currentEdge = ev.item;
                        if (self.addingEdge && self.edge === currentEdge) {
                            self.graph.removeItem(self.edge);
                            self.edge = null;
                            self.addingEdge = false;
                        }
                    },
                });
            },

            // 事件
            event() {
                // 监听鼠标进入节点
                this.graph.on('node:mouseenter', e => {
                    // 设置目标节点的 hover 状态 为 true
                    this.graph.setItemState(e.item, 'hover', true);
                });
                // 监听鼠标离开节点
                this.graph.on('node:mouseleave', e => {
                    // 设置目标节点的 hover 状态 false
                    this.graph.setItemState(e.item, 'hover', false);
                });
            },
        }
    }
</script>

<style scoped>

</style>