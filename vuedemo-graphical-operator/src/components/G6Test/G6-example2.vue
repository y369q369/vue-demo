<template>
    <!-- 图的画布容器 -->
    <div id="container"></div>
</template>

<script>
    import G6 from '@antv/g6';
    import insertCss from 'insert-css';

    // define the CSS with the id of your menu
    // 我们用 insert-css 演示引入自定义样式
    // 推荐将样式添加到自己的样式文件中
    // 若拷贝官方代码，别忘了 npm install insert-css
    insertCss(`
      #contextMenu {
        position: absolute;
        list-style-type: none;
        padding: 10px 8px;
        left: -150px;
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        font-size: 12px;
        color: #545454;
      }
      #contextMenu li {
        cursor: pointer;
            list-style-type:none;
        list-style: none;
        margin-left: 0px;
      }
      #contextMenu li:hover {
        color: #aaa;
      }
    `);

    export default {
        name: "G6-example",
        created() { //不能在created方法中初始化
            //this.initG6()
        },
        mounted(){
            // console.log(G6Test.Global.version)
            this.initG6()
        },
        methods: {
            initG6() {
                // 定义数据源
                const data = {
                    // 点集
                    nodes: [
                        {
                            id: 'node1',                // 节点的唯一标识
                            type: 'rect',               // 元素的图形, 默认为原形
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


                // 实例化 minimap 插件
                const minimap = new G6.Minimap({
                    size: [200, 100],
                    className: 'minimap',
                    type: 'delegate',
                });
                // 实例化 grid 插件: 网格可用于辅助用户在拖拽节点时对齐到网格
                const grid = new G6.Grid();

                // 创建 G6Test 图实例
                let graph = new G6.Graph({
                    container: 'container',                     // 指定图画布的容器 id
                    // 画布宽高
                    width: 800,
                    height: 500,
                    // 节点在默认状态下的样式配置（style）和其他配置
                    defaultNode: {
                        size: 50,                               // 节点大小
                        // ...                                  // 节点的其他配置
                        // 节点样式配置
                        style: {
                            fill: 'steelblue',                  // 节点填充色
                            stroke: '#666',                     // 节点描边色
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
                            opacity: 0.6,                       // 边透明度
                            stroke: 'grey',                     // 边描边颜色
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
                            fill: 'lightsteelblue',
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
                            'drag-canvas',                          // 允许拖拽画布
                            'zoom-canvas',                          // 允许放缩画布
                            'drag-node',                            // 允许拖拽节点
                        ],
                    },
                    plugins: [minimap, grid],                         // 将 minimap 实例配置到图上
                });

                // 读取数据
                graph.data(data);
                // 渲染图
                graph.render();

                // 监听鼠标进入节点
                graph.on('node:mouseenter', e => {
                    const nodeItem = e.item;
                    // 设置目标节点的 hover 状态 为 true
                    graph.setItemState(nodeItem, 'hover', true);
                });
                // 监听鼠标离开节点
                graph.on('node:mouseleave', e => {
                    const nodeItem = e.item;
                    // 设置目标节点的 hover 状态 false
                    graph.setItemState(nodeItem, 'hover', false);
                });
                // 监听鼠标点击边
                graph.on('edge:click', e => {
                    // 先将所有当前有 click 状态的边的 click 状态置为 false
                    const clickEdges = graph.findAllByState('edge', 'click');
                    clickEdges.forEach(ce => {
                        graph.setItemState(ce, 'click', false);
                    });
                    const edgeItem = e.item;
                    // 设置目标边的 click 状态 为 true
                    graph.setItemState(edgeItem, 'click', true);
                });


                const descriptionDiv = document.createElement('div');
                descriptionDiv.id = 'discription';
                descriptionDiv.innerHTML = 'Right click a node to activate a contextMenu.';
                document.getElementById('container').appendChild(descriptionDiv);
                // JSX and HTML templates are available for the menu
                // create ul
                const conextMenuContainer = document.createElement('ul');
                conextMenuContainer.id = 'contextMenu';

                // create li
                const firstLi = document.createElement('li');
                firstLi.innerText = 'Option 1';
                firstLi.addEventListener("click", function() {
                    console.log(1)
                })
                conextMenuContainer.appendChild(firstLi);

                const lastLi = document.createElement('li');
                lastLi.innerText = 'Option 2';
                lastLi.addEventListener("click", function() {
                    console.log(2)
                })
                conextMenuContainer.appendChild(lastLi);
                document.getElementById('container').appendChild(conextMenuContainer);

                graph.on('node:contextmenu', evt => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    conextMenuContainer.style.left = `${evt.x + 20}px`;
                    conextMenuContainer.style.top = `${evt.y}px`;
                });

                graph.on('node:mouseleave', () => {
                    conextMenuContainer.style.left = '-150px';
                });
            }
        }
    }
</script>

<style>
    /* 提示框的样式, 不能用scope */
    .g6-tooltip {
        border: 10px solid #e2e2e2;
        border-radius: 4px;
        font-size: 12px;
        color: #35beb6;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 10px 8px;
        box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    }
</style>