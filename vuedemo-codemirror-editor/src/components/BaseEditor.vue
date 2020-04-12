<template>
    <div class="baseEditor" :style="{height: height + 'px'}">
        <h1> 基础编辑器 </h1>
        <textarea ref="base" ></textarea>
    </div>
</template>

<script>
    // codemirror 主脚本
    import CodeMirror from 'codemirror'
    // codemirror 主样式
    import 'codemirror/lib/codemirror.css'
    // mode: javascript
    import 'codemirror/mode/javascript/javascript'

    export default {
        name: "BaseEditor",
        props: {
            value: String,
            height: Number,
        },
        data() {
            return {
                baseEditor: null
            }
        },
        mounted() {
            this.initBaseEditor();
        },
        methods: {
            initBaseEditor() {
                // 初始化 编辑器
                this.baseEditor = CodeMirror.fromTextArea(this.$refs.base, {
                    mode:  "javascript",                    // 编辑器模式
                    lineNumbers: true,                      // 显示行号
                });
                this.setValue();

                // 绑定 blur 事件， 将值 返回给父组件
                this.baseEditor.on('blur', updateValue => {
                    console.log("当前编辑器中内容：  %s", updateValue.getValue());
                    this.$emit('updateBaseEditor', updateValue.getValue())
                });

                console.log(this.getValue())
                this.baseEditor.refresh()
            },

            // 获取 编辑器值
            getValue() {
                return this.baseEditor.getValue()
            },

            // 设置 编辑器值
            setValue() {
                this.baseEditor.setValue(this.value)
            }
        }
    }
</script>

<style scoped>

    .baseEditor >>> .CodeMirror {
        height: 100%;
    }
</style>