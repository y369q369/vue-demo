<template>
    <div id="myholder"></div>
</template>

<script>

    import 'jointjs/dist/joint.css'
    import { dia, shapes } from 'jointjs'

    export default {
        name: "TestExample",
        data() {
            return {
                test2: 1
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                // 定义 纸上 的图形模型
                let graph = new dia.Graph;

                // 定义 纸张样式
                let paper = new dia.Paper({
                    el: document.getElementById('myholder'),                    // 将要在其中呈现纸张的HTML元素
                    model: graph,                                                          // 要渲染到纸上的图形模型
                    width: 600,                                                            // 呈现的纸的宽度（以像素为单位）
                    height: 300,                                                           // 呈现的纸的高度（以像素为单位）
                    gridSize: 1,                                                           // 元素对齐的网格的大小。影响元素移动的粒度
                    drawGrid: true,                                                        // 显示网格。 为了使网格可见，我们还需要增加 gridSize
                    background: {                                                          // 指定背景色
                        color: 'rgba(0, 255, 0, 0.3)'
                    }
                });
                paper.scale(1, 1);                                                  // 纸张的缩放比例
                paper.translate(100, 15);                                           // 纸张的坐标原点


                /**
                 * 首先，通过调用其构造函数来创建元素。
                 * 然后，在元素上调用不同的方法来设置其属性（位置，大小，属性...）。
                 * 最后，将元素添加到图中。
                 */
                // 定义 纸上的元素
                let rect = new shapes.standard.Rectangle();                                 // 创建 元素， 并定义形状
                rect.position(-50, 0);                                                // 元素的坐标，即位置
                rect.resize(70, 40);                                         // 元素的尺寸
                rect.attr({                                                         // 为元素设置属性
                    body: {
                        fill: 'blue'
                    },
                    label: {
                        text: 'Hello',
                        fill: 'white'
                    }
                });
                rect.addTo(graph);                                                          // 将元素添加到 图形模型 以便可以呈现

                let rect2 = rect.clone();                                                   // 克隆现有元素，包括其位置，尺寸和属性
                rect2.translate(300, 20);                                                    // 沿两个坐标轴将元素移动指定距离(以上一个元素为基准)
                rect2.attr('label/text', 'World!');
                rect2.addTo(graph);


                /**
                 * 首先，通过调用其构造函数来创建链接。
                 * 然后，在链接上调用不同的方法来设置其属性（源和目标，顶点，路由器和连接器，属性，标签...）。
                 * 最后，链接被添加到图形中。
                 */
                let link = new shapes.standard.Link();                                      // 定义 连接线
                link.source(rect);                                                          // 定义 连接线 源头
                link.target(rect2);                                                         // 定义 连接线 目标
                link.attr({
                    line: {
                        stroke: 'blue',
                        strokeWidth: 1,
                        sourceMarker: {
                            'type': 'path',
                            'stroke': 'black',
                            'fill': 'red',
                            'd': 'M 10 -5 0 0 10 5 Z'
                        },
                        targetMarker: {
                            'type': 'path',
                            'stroke': 'black',
                            'fill': 'yellow',
                            'd': 'M 10 -5 0 0 10 5 Z'
                        }
                    }
                });
                link.labels([{
                    attrs: {
                        text: {
                            text: 'Hello, World!'
                        }
                    }
                }]);
                link.addTo(graph);



                let rect3 = new shapes.standard.Rectangle();
                rect3.position(0, 130);
                rect3.resize(100, 40);
                rect3.attr({
                    body: {
                        fill: '#E74C3C',
                        rx: 30,                                                 // 等同于 border-radius效果， 横向
                        ry: 20,                                                 // 等同于 border-radius效果， 纵向
                        strokeWidth: 0                                          // 边框宽度
                    },
                    label: {
                        text: 'Hello',
                        fill: '#ECF0F1',
                        fontSize: 11,
                        fontVariant: 'small-caps'
                    }
                });
                rect3.addTo(graph);

                let rect4 = new shapes.standard.Rectangle();
                rect4.position(400, 130);
                rect4.resize(100, 40);
                rect4.attr({
                    body: {
                        fill: '#8E44AD',
                        strokeWidth: 0
                    },
                    label: {
                        text: 'World!',
                        fill: 'white',
                        fontSize: 13
                    }
                });
                rect4.addTo(graph);

                let link2 = new shapes.standard.Link();
                link2.source(rect3);
                link2.target(rect4);
                link2.addTo(graph);
            }
        }
    }
</script>

<style scoped>
    #myholder {
        background: skyblue;
    }
</style>