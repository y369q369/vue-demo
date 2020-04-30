import G6 from '@antv/g6'
import edgeConfig from "@/components/G6Test/mode/behavior/edgeConfig";

const behaviors = [
    edgeConfig
];

behaviors.map(item => {
    G6.registerBehavior(item.name, item.options)
});

export default G6