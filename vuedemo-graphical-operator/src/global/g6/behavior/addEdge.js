export default {
    name:'add-edge',
    options:{
        getEvents () {
            return {
                'node:click': 'onNodeClick',                // 节点点击事件
                mousemove: 'onMousemove',                   // 鼠标移动事件
                'edge:click': 'onEdgeClick',                // 边点击事件
            }
        },
        onNodeClick(event) {
            const _t = this;
            const node = event.item;
            const graph = _t.graph;
            // The position where the mouse clicks
            const point = { x: event.x, y: event.y };
            const model = node.getModel();

            if (_t.addingEdge && _t.edge) {
                // 判断 当前边 是否存在
                let existEdge = node.getEdges().filter((edge) => {
                    return edge.getSource() === _t.edge.getSource() && edge.getTarget() === node
                });

                if(_t.edge.getSource() === node || existEdge.length !== 0) {
                    _t.graph.removeItem(_t.edge);
                    _t.edge = null;
                    _t.addingEdge = false;
                } else {
                    graph.updateItem(_t.edge, {
                        target: model.id,
                    });

                    _t.edge = null;
                    _t.addingEdge = false;
                }
            } else {
                // Add anew edge, the end node is the current node user clicks
                _t.edge = graph.addItem('edge', {
                    source: model.id,
                    target: point,
                });
                _t.addingEdge = true;
            }
        },
        onMousemove(event) {
            const _t = this;
            if (_t.addingEdge && _t.edge) {
                // The current position the mouse clicks
                const point = { x: event.x, y: event.y };
                // Update the end node to the current node the mouse clicks
                _t.graph.updateItem(_t.edge, {
                    target: point,
                });
            }
        },
        // The responsing function for edge:click defined in getEvents
        onEdgeClick(event) {
            const _t = this;
            const currentEdge = event.item;
            if (_t.addingEdge && _t.edge === currentEdge) {
                _t.graph.removeItem(_t.edge);
                _t.edge = null;
                _t.addingEdge = false;
            }
        },
    }
}
