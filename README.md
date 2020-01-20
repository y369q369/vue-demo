### vue-demo

### 1. 简介

​	vue及其他相关功能的摸坑系类列



### 2. 系列

​	axios发送请求，nginx代理请求      [vuedemo-axios-nginx](https://github.com/y369q369/vue-demo/tree/master/vuedemo-axios-nginx)



### 3. 常见操作解释

#### 3.1 vue-cli 2和3区别

1. 安装包不同

   vue-cli2： npm install -g vue/cli			npm uninstall vue-cli -g
   vue-cli3： npm install -g @vue/cli			npm uninstall @vue-cli -g

2. 配置文件

   vue-cli2中直接暴露webpack配置，vue-cli3需要自己创建，如vue.config.js

3. 创建方式

   vue-cli2： 命令行创建 (vue create 项目名)

   vue-cli3： 图形化界面  (vue ui)



#### 3.2 npm i 和 npm install区别

1. 用npm i安装的模块无法用npm uninstall删除，用npm uninstall i才卸载掉 
2. npm i会帮助检测与当前node版本最匹配的npm包版本号，并匹配出来相互依赖的npm包应该提升的版本号 
3. 部分npm包在当前node版本下无法使用，必须使用建议版本 
4. 安装报错时intall肯定会出现npm-debug.log 文件，npm i不一定 



#### 3.3 npm install 常用的-S 、-D 、-g 区别

- npm i module_name -S    即    npm install module_name --save     写入dependencies，发布到生产环
- npm i module_name -D    即    npm install module_name --save-dev  写入devDependencies，发布到开发环境
- npm i module_name -g     即    global全局安装(命令行使用)
- npm i module_name          即    本地安装(将安装包放在 ./node_modules 下)



#### 3.4 main.js中 初始化vue对象 代码的演化

​	简化写法

```
import Index from './Index.vue'
new Vue({
  render: h => h(Index),
}).$mount('#app')
```

​	原生写法

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



#### 3.5 浏览器控制台提示socket.js报错问题

​	注释： 文件 /node_modules/sockjs-client/dist/sockjs.js 第1605行

```
try {
  //  self.xhr.send(payload); 把这里注掉
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
```



#### 3.6  js中export作用

​	export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。而 new Vue() 相当于一个构造函数，在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。

​	export 和export default 的区别在于：export 可以导出多个命名模块，例如：

```
//demo1.js
export const str = 'hello world'

export function f(a){
    return a+1
}
```

​	对应的引入方式：

```
//demo2.js
import { str, f } from 'demo1'
```

​	export default 只能导出一个默认模块，这个模块可以匿名，例如：

```
//demo2.js
export default {
    a: 'hello',
    b: 'world'      
}
```

​	对应的引入方式：

```
//demo2.js
import obj from 'demo1'
```

​	引入的时候可以给这个模块取任意名字，例如 "obj"，且不需要用大括号括起来。