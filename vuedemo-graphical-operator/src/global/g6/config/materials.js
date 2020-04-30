// topic节点
export function topic (nodeNum) {
    return {
                x: 50 * nodeNum,
                    y: 100,
                // id: `node-${nodeNum}`, // Generate the unique id
                label: `topic-${nodeNum}`,
                type: 'rect',
                style: {
                width: 150,
                    height: 50,
                    fill: '#DFEFCA',                  // 节点填充色
                    stroke: '#000000',                     // 节点描边色
                    lineWidth: 1,                       // 节点描边粗细
                },
                // 节点上的标签文本配置
                labelCfg: {
                    // 节点上的标签文本样式配置
                    style: {
                        fill: '#333',                   // 节点标签文字颜色
                    },
                },
                belong: 'topic',
            }
}

// DB节点
export function DB (nodeNum) {
    return {
            x: 25 * nodeNum,
            y: 200,
            // id: `node-${nodeNum}`, // Generate the unique id
            label: `DB-${nodeNum}`,
            style: {
            r: 50,
                fill: '#D1F5FF',                  // 节点填充色
                stroke: '#000000',                     // 节点描边色
                lineWidth: 1,                       // 节点描边粗细
            },
            // 节点上的标签文本配置
            labelCfg: {
                // 节点上的标签文本样式配置
                style: {
                    fill: '#333',                   // 节点标签文字颜色
                },
            },
            belong: 'DB',
        }
}