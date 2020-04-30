export default {
    name:'edge-config',
    options:{
        getEvents () {
            return {
                'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
                mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
                'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
                'node:dblclick': 'onNodeDblclick',
                'node:contextmenu': 'onNodeContextmenu',

            }
        },
        onNodeContextmenu(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            console.log("x: " + ev.clientX + ",  y: " + ev.clientY);
        },
        onNodeDblclick(ev) {
          console.log("dbclick, ", ev)
        },
        onClick(ev) {
            console.log("node click")
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
            // console.log("mouse move")
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
            console.log("edge click")
            const self = this;
            const currentEdge = ev.item;
            if (self.addingEdge && self.edge === currentEdge) {
                self.graph.removeItem(self.edge);
                self.edge = null;
                self.addingEdge = false;
            }
        },
    }
}