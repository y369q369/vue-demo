<template>
    <div style="width: 60%; margin-left: 20%">
        <json-editor :value="jsonValue" :height="600" @updateBaseEditor="test"/>
    </div>
</template>

<script>
    import JsonEditor from "@/components/JsonEditor";

    export default {
        name: "JsonView",
        components: {JsonEditor},
        data() {
            return {
                jsonValue: {
                    "menu": {
                        "id": "file",
                        "value": "File",
                        "popup": {
                            "menuitem": [
                                {"value": "New", "onclick": "CreateNewDoc()"},
                                {"value": "Open", "onclick": "OpenDoc()"},
                                {"value": "Close", "onclick": "CloseDoc()"}
                            ]
                        }
                    },
                    "menu2": {
                        "id": "file",
                        "value": "File",
                        "popup": {
                            "menuitem": [
                                {"value": "New", "onclick": "CreateNewDoc()"},
                                {"value": "Open", "onclick": "OpenDoc()"},
                                {"value": "Close", "onclick": "CloseDoc()"}
                            ]
                        }
                    }
                }
            }
        },
        methods: {
            test(updateValue) {
                this.baseValue = updateValue;
                console.log("编辑器修改后的值:  %s", this.baseValue)
            }
        }
    }
</script>

<style scoped>

</style>