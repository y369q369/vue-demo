<template>
    <div id="mountNode"></div>
</template>

<script>
    import G6 from '@antv/g6'
    export default {
        name: "Test",
        mounted() {
            G6.registerNode('custom', {
                anchor: [
                    [0.5, 0],
                    [0.5, 1]
                ]
            });
            const data = {
                nodes: [{
                    id: 'node1',
                    x: 100,
                    y: 200
                },{
                    id: 'node2',
                    x: 200,
                    y: 300
                }],
                edges: [{
                    id: 'edge1',
                    target: 'node2',
                    source: 'node1',
                    targetAnchor: 1 // 强制指定目标节点的连接点是索引为 1 的锚点
                }]
            };
            const graph = new G6.Graph({
                container: 'mountNode',
                width: 500,
                height: 500
            });
            graph.node({
                shape: 'custom',
                style: {
                    fill: null,
                    stroke: '#666'
                }
            });
            graph.read(data);
        }
    }
</script>

<style scoped>

</style>