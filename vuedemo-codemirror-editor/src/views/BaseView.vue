<template>
    <div style="width: 60%; margin-left: 20%">
        <BaseEditor :value="baseValue" :height="600" @updateBaseEditor="test"/>
    </div>
</template>

<script>
    import BaseEditor from "@/components/BaseEditor";

    export default {
        name: "BaseView",
        components: {BaseEditor},
        data() {
            return {
                baseValue: 'function getCompletions(token, context) {\n' +
                    '  var found = [], start = token.string;\n' +
                    '  function maybeAdd(str) {\n' +
                    '    if (str.indexOf(start) == 0) found.push(str);\n' +
                    '  }\n' +
                    '  function gatherCompletions(obj) {\n' +
                    '    if (typeof obj == "string") forEach(stringProps, maybeAdd);\n' +
                    '    else if (obj instanceof Array) forEach(arrayProps, maybeAdd);\n' +
                    '    else if (obj instanceof Function) forEach(funcProps, maybeAdd);\n' +
                    '    for (var name in obj) maybeAdd(name);\n' +
                    '  }\n' +
                    '\n' +
                    '  if (context) {\n' +
                    '    // If this is a property, see if it belongs to some object we can\n' +
                    '    // find in the current environment.\n' +
                    '    var obj = context.pop(), base;\n' +
                    '    if (obj.className == "js-variable")\n' +
                    '      base = window[obj.string];\n' +
                    '    else if (obj.className == "js-string")\n' +
                    '      base = "";\n' +
                    '    else if (obj.className == "js-atom")\n' +
                    '      base = 1;\n' +
                    '    while (base != null && context.length)\n' +
                    '      base = base[context.pop().string];\n' +
                    '    if (base != null) gatherCompletions(base);\n' +
                    '  }\n' +
                    '  else {\n' +
                    '    // If not, just look in the window object and any local scope\n' +
                    '    // (reading into JS mode internals to get at the local variables)\n' +
                    '    for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name);\n' +
                    '    gatherCompletions(window);\n' +
                    '    forEach(keywords, maybeAdd);\n' +
                    '  }\n' +
                    '  return found;\n' +
                    '}'
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