// 锚点坐标
const rectAnchorPoints = [
    [0, 0],
    [0.33, 0],
    [0.66, 0],
    [1, 0],
    [1, 0.5],
    [1, 1],
    [0.66, 1],
    [0.33, 1],
    [0, 1],
    [0, 0.5],
]

export default [
    {
        type: 'rect',
        anchorPoints: rectAnchorPoints,
        style: {
            width: 200,
            height: 50,
            fill: '#DFEFCA',                  // 节点填充色
            stroke: '#000000',                     // 节点描边色
            lineWidth: 1,                       // 节点描边粗细
        },
    },
    {
        id: 'node1',                // 节点的唯一标识
        type: 'rect',               // 元素的图形, 默认为圆形
        x: 100,                     // 节点横坐标
        y: 200,                     // 节点纵坐标
        size: 40,                   // 元素的大小
        label: '起始点',            // 节点文本
        style: {                    // 包裹样式属性的字段 style 与其他属性在数据结构上并行
            fill: 'rgb(209, 245, 255)',                          // 样式属性，元素的填充色
            stroke: '#000000',                                      // 样式属性，元素的描边色
            // ...                                                  // 其他样式属性
        }
    },
]