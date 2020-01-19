# vuedemo-axios-nginx

1. axios发送跨域请求，nginx反向代理解决跨域问题的demo
2. 跨域是浏览器安全限制的,不是服务器限制的

## quickStart

- 开发环境： npm run server
- 打包： npm run build 

## dependency

- axios: cnpm install axios --save (发送请求，类似ajax)
- qs: cnpm install qs --save-dev (转化数据)

## Solution

### 1. 跨域问题

No 'Access-Control-Allow-Origin' header is present on the requested resource. 

解决方案： 开发环境 - Vue Cli的代理模式解决:https://cli.vuejs.org/zh/config/#devserver

```
module.exports = {
    devServer: {
        proxy: {
            '/demo2': {
                target: 'http://localhost:8083',          //  请求 /demo2/xxx 会被代理到  http://localhost:8083/demo2/xxx，
                                                          //  配合Axios.defaults.baseURL默认基础路由使用
            }
        }
    }
}
```

​	生产环境 - nginx解决

```
server {
        listen       8088;
        server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
        location /vuedemo-axios-nginx {
            root   G:\workSpace\webStorm\vuedemo-axios-nginx\dist;   	# 指向目标文件位置（相对和绝对路径都可）
            index  index.html;
        }	
		location /demo2 {
            proxy_pass    http://localhost:8083;    					# 设置代理
        }
}
```

### 2. JSON和qs的json和string转化区别

- json转string

```
var a = {name:'hehe',age:10};
qs.stringify(a) 		// 'name=hehe&age=10' 
JSON.stringify(a) 		// '{"name":"hehe","age":10}'
```

- string转json

```
var a = '{name:"hehe",age:10}';
qs.parse(a) 		//{ '{name:"hehe",age:10}': '' } 
JSON.parse(c) 		//{ name: 'hehe', age: '10' } 

var a=[{a:123},{a:345}] 
qs.stringify(a) 	//'0[a]=123&1[a]=345'
```

### 3. 打包后页面为空(可直接打开，不许放在web服务器中)

修改配置文件vue.config.js

```
publicPath: './',
```

### 4. nginx配置（nginx.conf）

```
http {
    server {
        listen       8088;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
		
        location /vuedemo-axios-nginx {
            root   G:\workSpace\webStorm\vuedemo-axios-nginx\dist;   	# 指向目标文件位置（相对和绝对路径都可）
            index  index.html;
        }
		
		location /demo2 {
            proxy_pass    http://localhost:8083;    					# 设置代理
        }
    }
}    
```

