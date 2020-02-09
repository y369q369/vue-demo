# vuedemo-sidebar

1. 侧边栏：elementUI的 el-menu菜单导航栏 
2. 自定义图标：阿里的Iconfont
3. 面包屑：elementUI的 Breadcrumb 
4. 动态菜单：vue的插件Vue Router
5. 全局变量：vue的插件Vuex

### 1. quickStart

- 开发环境： npm run server
- 打包：	npm run build

### 2. dependency

| name              | install                               |
| ----------------- | ------------------------------------- |
| elementUI         | cnpm i element-ui -S                  |
| Vue Router        | cnpm i vue-router -S                  |
| Vuex              | cnpm install vuex --save              |
| Vuex的状态存储    | cnpm i -S vuex-persistedstate         |
| svg-sprite-loader | cnpm i svg-sprite-loader --save       |
| normalize.css     | cnpm install --save normalize.css     |
| sass-loader       | cnpm install node-sass --save-dev     |
|                   | cnpm install sass-loader --save-dev   |
| codemirror        | cnpm install codemirror --save        |
| script-loader     | cnpm install script-loader --save-dev |
| jsonlint          | cnpm install jsonlint --save          |



### 3. explanation

#### 3.1 svg 使用

##### 3.1.1 传统使用

1. 从iconFont中将所有的图标下载到一个js中

2. 引入 ./iconfont.js

3. 挑选相应图标并获取类名，应用于页面 

   ```
   <svg class="icon" aria-hidden="true">
       <use xlink:href="#icon-xxx"></use>
   </svg>
   ```

4. 加入通用css代码 

   ```
   <style type="text/css">
       .icon {
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
       }
   </style>
   ```

##### 3.1.2 vue简单组件使用

所有的svg全放在js里，无法直观知道对应图标的样子，且添加新svg图标麻烦

1. 组件 ： components/Icon-svg

   ```
   <template>
     <svg class="svg-icon" aria-hidden="true">
       <use :xlink:href="iconName"></use>
     </svg>
   </template>
   
   <script>
   export default {
     name: 'icon-svg',
     props: {
       iconClass: {
         type: String,
         required: true
       }
     },
     computed: {
       iconName() {
         return `#icon-${this.iconClass}`
       }
     }
   }
   </script>
   
   <style>
   .svg-icon {
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
   }
   </style>
   ```

2. 使用

   ```
   //引入svg组件
   import IconSvg from '@/components/IconSvg'
   
   //全局注册icon-svg
   Vue.component('icon-svg', IconSvg)
   
   //在代码中使用
   <icon-svg icon-class="password" />
   ```

##### 3.1.3 结合svg-sprite-loader封装组件（具体可看本例的代码）

​	每一个svg单独出来，直接看图标，直接添加

1. 自动导入图标：循环每一个svg，放置在svg目录下

   ```
   import Vue from 'vue'
   import SvgIcon from '@/components/SvgIcon'
   
   // register globally
   Vue.component('svg-icon', SvgIcon)
   
   const req = require.context('./svg', false, /\.svg$/)
   const requireAll = requireContext => requireContext.keys().map(requireContext)
   requireAll(req)
   ```

2. 处理 svg-sprite-loader 与 vue-cli3 默认情况对svg进行处理 url-loader 之间的冲突

   ```
   chainWebpack(config) {
           // 排除file-loader对我们iconFonts文件夹的svg文件处理
           config.module
               .rule('svg')
               .exclude.add(resolve('src/iconFonts'))
               .end()
           // 设置svg-sprite-loader专门处理iconFonts目录中的svg
           config.module
               .rule('iconFonts')
               .test(/\.svg$/)
               .include.add(resolve('src/iconFonts'))
               .end()
               .use('svg-sprite-loader')
               .loader('svg-sprite-loader')
               .options({
                   symbolId: 'icon-[name]'
               })
               .end()
       }
   ```

#### 3.2 css样式的使用

##### 3.2.1 normalize.css使用

​	html5的新标准样式，可以覆盖原生的html5样式，直接在main.js中引用即可

​	官网： https://github.com/necolas/normalize.css

##### 3.2.2 sass-loader

​	样式定义变量，继承属性等css的使用

​	官网： https://www.webpackjs.com/concepts/loaders/

##### 3.2.3 页面高度100%且body和html之间无空白

​	从上到下，每个容器的高度设置为100%, 且引入normalize.css，详细可查看style/index.scss文件的设置

#### 3.3 Vuex 使用

##### 3.3.1 大体介绍

​	项目的全局属性 需要自己维护，Vuex是vue封装好的全局属性管理插件

​	官网: https://vuex.vuejs.org/zh/

##### 3.3.2 项目粗略使用

1. 创建 store.js, 文件大体结构

   ```
   import Vue from 'vue';
   import Vuex from 'vuex';
   
   Vue.use(Vuex);
   
   const store = new Vuex.Store({
       state: {  
       },
       getters: {  
       },
       mutations: {
       },
       actions: {
       }
   });
   
   export default store;
   ```

2. 在 main.js 中引用

   ```
   import Vue from 'vue'
   import App from './App.vue'
   
   // 导入Vuex
   import store from './store'
   
   Vue.config.productionTip = false
   
   new Vue({
     el: '#app',
     store,
     render: h => h(App),
   })
   ```

3. 各个组件功能大体介绍

   ```
   state        -    保存全局变量
   getter       -    处理全局变量属性值的加工，生成新变量
   mutitation   -    更改全局变量的值（只同步操作），即state中变量的值只能通过此处修改
   action       -    更改全局变量的值（异步操作），通过提交mutitation修改state的值，不直接接触state
   module       -    模块化Vuex各部分内容，把大对象分割成小对象
   ```

4. 缺陷及补救

   ```
   缺陷：  刷新页面（F5） vuex中的值因为页面重新初始化会被清空
   补救：  将值存到session或cookie中，页面刷新之后再重新赋值，对应插件 vuex-persistedstate
   ```

#### 3.4 Vuex 使用

##### 3.4.1 简单介绍

​	将url集中管理，模块化，规范化

​	官网：https://router.vuejs.org/zh/

##### 3.4.2 项目中的使用姿势

1. 创建router.js，文件内容

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "./layout_hasRouter/Layout";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',    // 去掉url中的#
    base: '/',
    // routes 			// (缩写) 相当于 routes: routes
    routes: [
    ]
})

export default router
```

1. main.js中引用

```
import Vue from 'vue'
import App from './App.vue'

// 导入vue-router
import router from "./router";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
```

1. App.vue中使用

```
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: 'app',
    }
</script>
```

1. element的el-menu导航栏组件中使用

```
<el-menu :default-active="this.$route.path"
                 router
                 class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 background-color="#304156"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 :collapse-transition="false">
            <el-menu-item index="/home">
                <svg-icon icon-class="db" />
                <span slot="title">数据库</span>
            </el-menu-item>
</el-menu>
```

1. layout中使用

```
<template>
    <div>
        <SideBar></SideBar>

        <div class="main-container">
            <NavBar></NavBar>
            <router-view :key="this.$route.path" />
        </div>
    </div>
</template>

<script>
    import SideBar from "./SideBar";
    import NavBar from "./NavBar";

    export default {
        name: "Layout_hasRouter",
        components: {
            SideBar,
            NavBar
        },
    }
</script>
```

### 4. pit

#### 4.1 elementUI 的可收缩侧栏导航栏

```
1. collapse-transition 属性 设为 false, 否则收缩时会有白线在中间显示
2. el-menu-item 中可添加样式来更改默认样式
```

#### 4.2 三个layout的作用

```
1. 本demo采用循序渐进的方式完善功能
2. 各自作用
   layout_noRouter：  完全不适用vue-router插件与el-menu结合，固定的导航栏，只为功能展示实现
   layout_hasRouter： vue-router与el-menu结合，添加路由需要每次在router.js和SideBar中添加对应路由
   layout_fullRouter：封装SideBar，自动检测加载router.js中路由，添加新路由只需按规则在router.js添加
```

#### 4.3 SidebarItem组件的作用

```
layout_fullRouter封装时发现router.js中的路径含有子节点，可以使用递归的思想操作
原则   1. 没有子节点且自身有meta属性展示自身（* 确保router中没有特例：没有子节点且自身也没有meta属性）
      2. 有子节点，去掉hidden属性后的值只有一个子节点且有meta属性展示子节点
```

### 5. references

​	svg组件 ：	 https://www.jianshu.com/p/5945efb1e34a

​							https://segmentfault.com/a/1190000015367490

​							https://juejin.im/post/59bb864b5188257e7a427c09#heading-0

  jsonEdit组件：  https://blog.csdn.net/mnhn456/article/details/87879367s