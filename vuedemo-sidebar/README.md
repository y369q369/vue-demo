# vuedemo-sidebar

1. 侧边栏：elementUI的 el-menu菜单导航栏 
2. 自定义图标：阿里的Iconfont
3. 面包屑：elementUI的 Breadcrumb 
4. 动态菜单：vue的插件Vue Router



### 1. quickStart

开发环境： npm run server

打包： npm run build



### 2. dependency

- elementUI: 			cnpm i element-ui -S 
- Vue Router:			cnpm i vue-router
- svg-sprite-loader:  cnpm i svg-sprite-loader --save
- normalize.css：	 cnpm install --save normalize.css
- sass-loader：		 cnpm install node-sass --save-dev

​                                         cnpm install sass-loader --save-dev



### 3. explanation 

#### 3.1 svg 使用

#####  3.1.1 传统使用

1. 从iconFont中将所有的图标下载到一个js中

2. 引入   ./iconfont.js

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

 1. 组件 ：  components/Icon-svg

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



#### 3.2  css样式的使用

##### 3.2.1 normalize.css使用

​	html5的新标准样式，可以覆盖原生的html5样式，直接在main.js中引用即可

官网：   https://github.com/necolas/normalize.css 

##### 3.2.2 sass-loader

​	样式定义变量，继承属性等css的使用

官网：   https://www.webpackjs.com/concepts/loaders/ 

##### 3.2.3 页面高度100%且body和html之间无空白

​	从上到下，每个容器的高度设置为100%, 且引入normalize.css，详细可查看style/index.scss文件的设置



### 4. references

svg组件 ：  https://www.jianshu.com/p/5945efb1e34a 

​					https://segmentfault.com/a/1190000015367490 

​					https://juejin.im/post/59bb864b5188257e7a427c09#heading-0 

