// 添加边交互
import addEdge from './addEdge'
import showContextMenu from "@/global/g6/behavior/showContextMenu";

const behaviors = {
    addEdge,
    showContextMenu
}

export default function (G6) {
    Object.values(behaviors).map(item => {
        G6.registerBehavior(item.name, item.options)
    })
}