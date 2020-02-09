<template>
    <div>
        <h1>this is jsonEdit</h1>
        <a href="https://blog.csdn.net/mnhn456/article/details/87879367">参考文章</a>
        <JsonEditor :value="test"></JsonEditor>
    </div>
</template>

<script>
    import JsonEditor from "../../components/JsonEditor";

    const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

    export default {
        name: "jsonEdit",
        components: {
            JsonEditor
        },
        data() {
            return {
                test: JSON.parse(jsonData),
            }
        }
    }
</script>

<style scoped>

</style>