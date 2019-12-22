# vue-tran1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 关闭页面提示socket.js报错问题
注释：  文件 /node_modules/sockjs-client/dist/sockjs.js   第1605行
```
try {
  //  self.xhr.send(payload); 把这里注掉
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
```