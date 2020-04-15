# 坑

## 语法坑

### 如何在 nuxt 集成 koa 得环境下使用 ES6 语法(import/expor)

1. 根目录新建一个.babelrc 文件

```javascript
{
  "presets": [
    "es2015"
  ]
}
```

2. 在 package.json 中 ,需要在 script 配置项中 dev 和 start 的启动指令后面加上--exec babel-node

3. npm i babel-preset-es2015 --save-dev

### 出现 mongoose 模型的方法 not a function

1. 在模型中导出的时候,使用 module.export

```javascript
module.exports = mongoose.model('User', UserSchema)
// 而不选择使用
export default mongoose.model('User', UserSchema)
```

### 在 nuxt 中使用 vuex

不需要在 store 目录下新建一个 module 的目录,nuxt 会自动编译目录下的文件为一个模块.

```javascript
export const state = () => {
  geo
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {}
}
```

### 动态修改样式

```html
<div
  :id="id"
  :style="{width:width+'px',height:height+'px',margin:'34px auto'}"
  class="m-map"
/>
```

1. 后端动态传递一个类名
2. 动态绑定内联样式

### nuxt 中访问 window 对象

必须放在 mounted 生命周期函数中，否则会报错。

### 前后端数据解耦映射和过滤

```javascript
// 过滤掉 photos 为空的数据然后再做映射
list: pois
  .filter(item => item.photos.length)
  .map(item => {
    return {
      type: item.type,
      img: item.photos[0].url,
      name: item.name
    }
  })
```

## 环境坑

### 初始化项目

1. 使用 npm i 全局安装依赖

2. 由于项目使用到 scss 预编译,所以需要安装 node-sass 和 sass-loader,注意最好使用 cnpm 命令安装,否则无限报错

### 上传项目到 github

1. 配置 ssh
2. git init
3. git remote add origin https://github.com/leslie-choi/mt-app.git
4. git pull origin master --allow-unrelated-histories
5. git add .
6. git commit -m ''
7. git push origin master

### 项目超时报 500 错误

重新启动数据库和 redis 服务

## 插件坑

## 数据库坑(win)

1. 连接数据库之前必须 cd 到 mongoose 安装的 bin 目录下,使用 mongo.exe 命令启动数据库

2. 导入数据库需要使用到 mongoimport 命令.有可能没有全局安装,需要将 mongoose 安装目录下的 mongoimport.exe 复制到.dat 数据文件目录,然后进行数据的导入

## mac 连接数据库

mac 连接 mongodb，先 cd /usr/local/mongoDB/bin，然后执行命令 sudo ./mongod

# nuxt 中文文档

ctx.query
解构赋值
前端处理后端传过来的数据,如果很多数据不需要使用到,可以使用 map 去映射所需要的字段,然后显示在页面中,在 artistic.vue 中

处理首页 hover 菜单出错
