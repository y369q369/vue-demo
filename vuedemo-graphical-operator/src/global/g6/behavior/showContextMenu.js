export default {
    name: 'show-contextMenu',
    options: {
        getEvents() {
            return {
                'node:contextmenu': 'onContextMenu',
                'edge:contextmenu': 'onContextMenu'
            }
        },
        // 节点 和 边 右击事件
        onContextMenu(event) {
            event.preventDefault();
            event.stopPropagation();
            this.graph.emit('showContextmenu', {
                x: event.clientX,
                y: event.clientY,
                canvasX: event.canvasX,
                canvasY: event.canvasY,
                element: event.item
            })
        }
    }
}