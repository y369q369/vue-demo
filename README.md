### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1. 关闭页面提示socket.js报错问题
注释：  文件 /node_modules/sockjs-client/dist/sockjs.js   第1605行
```
try {
  //  self.xhr.send(payload); 把这里注掉
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
```

### 2. main.js中的代码的解疑
简化写法
```
import Index from './Index.vue'
new Vue({
  render: h => h(Index),
}).$mount('#app')
```
原生写法
```
new Vue({
  el: '#app',
  render: h => h(Index)
})

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    Index
  }
})
```

### 3. js中export作用
export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。而 new Vue() 相当于一个构造函数，在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。

export 和export default 的区别在于：export 可以导出多个命名模块，例如：
```
//demo1.js
export const str = 'hello world'

export function f(a){
    return a+1
}
```
对应的引入方式：
```
//demo2.js
import { str, f } from 'demo1'
```
export default 只能导出一个默认模块，这个模块可以匿名，例如：
```
//demo1.js
export default {
    a: 'hello',
    b: 'world'      
}
```
　　对应的引入方式：
```
//demo2.js
import obj from 'demo1'
```
　　引入的时候可以给这个模块取任意名字，例如 "obj"，且不需要用大括号括起来。