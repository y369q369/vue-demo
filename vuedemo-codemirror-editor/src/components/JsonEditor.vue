<template>
    <div class="jsonEditor" :style="{height: height + 'px'}">
        <h1> json 编辑器 </h1>
        <textarea ref="json" ></textarea>
    </div>
</template>

<script>
    // codemirror 主脚本 和 样式
    import CodeMirror from 'codemirror'
    import 'codemirror/lib/codemirror.css'
    // mode: javascript
    import 'codemirror/mode/javascript/javascript'

    // javascript 代码 折叠 插件
    import 'codemirror/addon/fold/foldgutter'
    import 'codemirror/addon/fold/foldgutter.css'
    import 'codemirror/addon/fold/brace-fold'

    // 全屏 插件
    import 'codemirror/addon/display/fullscreen'
    import 'codemirror/addon/display/fullscreen.css'

    export default {
        name: "JsonEditor",
        props: {
            value: Object,
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
                this.baseEditor = CodeMirror.fromTextArea(this.$refs.json, {
                    // mode:  {name: "javascript", json: true},                            // 编辑器模式
                    // lineNumbers: true,                                                  // 显示行号
                    // lineWrapping: true,                                                 // 滚动或换行以显示长行，默认为false（滚动）
                    // foldGutter: true,                                                   // 开启折叠
                    // gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

                    mode: {name: "javascript", json: true},
                    lineNumbers: true,
                    lineWrapping: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    // 设置 全屏快捷键，  F11 关/全屏, Esc 关闭全屏
                    extraKeys: {
                        "F11": function(cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                        },
                        "Esc": function(cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                        }
                    }
                });
                this.setValue();

                // 绑定 blur 事件， 将值 返回给父组件
                this.baseEditor.on('blur', updateValue => {
                    console.log("当前编辑器中内容：  %s", updateValue.getValue());
                    this.$emit('updateBaseEditor', updateValue.getValue())
                });

                console.log(this.getValue())

                this.baseEditor.foldCode(CodeMirror.Pos(5, 0));

            },

            // 获取 编辑器值
            getValue() {
                return this.baseEditor.getValue()
            },

            // 设置 编辑器值
            setValue() {
                console.log(this.value)
                this.baseEditor.setValue(JSON.stringify(this.value, null, 2))
            }
        }
    }
</script>

<style scoped>

    .jsonEditor >>> .CodeMirror {
        height: 100%;
    }
</style>