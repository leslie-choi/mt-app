# 坑

## 语法坑

### 如何在nuxt集成koa得环境下使用ES6语法(import/expor)

1. 根目录新建一个.babelrc文件

```javascript
{
  "presets": [
    "es2015"
  ]
}
```

2. 在package.json中 ,需要在script配置项中dev和start的启动指令后面加上--exec babel-node

3. npm i babel-preset-es2015 --save-dev

### 出现mongoose模型的方法not a function

1. 在模型中导出的时候,使用module.export

```javascript

module.exports = mongoose.model('User', UserSchema)
// 而不选择使用
export default mongoose.model('User', UserSchema)

```

### 在nuxt中使用vuex

不需要在store目录下新建一个module的目录,nuxt会自动编译目录下的文件为一个模块.

```javascript

export const state = () => {
  geo
}

export const actions = {
  async nuxtServerInit ({
    commit
  }, { req, app }) {

  }
}

```

## 环境坑

### 初始化项目

1. 使用npm i全局安装依赖

2. 由于项目使用到scss预编译,所以需要安装node-sass和sass-loader,注意最好使用cnpm命令安装,否则无限报错

## 插件坑

## 数据库坑(win)

1. 连接数据库之前必须cd到mongoose安装的bin目录下,使用mongo.exe命令启动数据库

2. 导入数据库需要使用到mongoimport命令.有可能没有全局安装,需要将mongoose安装目录下的mongoimport.exe复制到.dat数据文件目录,然后进行数据的导入


# nuxt中文文档


ctx.query
解构赋值
前端处理后端穿过来的数据,使用map去映射,在artistic.vue中


处理首页hover菜单出错