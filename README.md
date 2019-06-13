# 学生管理系统

## 需求1. 注册用户密码需要加密处理 (bcrypt)

123   adfasdfxzcvearwqrfasdf

- 1. 哈希   将原始密码做一个处理。处理成一段你也不知道是啥的字符串

  ac59075b964b0715

  ac59075b964b0715

- 2. 加盐   在哈希的基础上面再加上一点随机字符串

  ac59075b964b0715 + Math.random(132123)

  123   ac59075b964b0715dsafasdfdsa

  123   ac59075b964b07159uriaekflsdfj

### bcrypt 使用方式

1. 安装 npm install --save bcrypt
2. 引入并使用
  ```js
    const bcrypt = require('bcrypt');
    bcrypt.hash()
  ```

## RESTfulApi

> 同一个请求地址，然后根据不同的请求方式，来实现不同的功能。

## 目前前端页面与后台的接口 前后端分离的项目类型

## 前端后不分离的项目

1. 目前已经做好了不分离的项目，但是所有的数据全部都是通过 ajax 请求来的。 在以前，没有 ajax 的时候，我们页面的数据，是后台提供的。通过 模板引擎的方式来渲染到页面上。

  模板引擎 = 将页面与数据结合起来然后渲染到浏览器的东西。

  后端渲染 - 数据处理是在哪个位置后端

  前端渲染 - 数据处理是在浏览器端，通过js代码来控制的。操作dom的方式

  模板引擎的工具：
    ejs (****)
    templatejs
    pug
    jage


## EJS 这块模板引擎工具使用在 express 项目中

1. 安装  ejs  npm install --save ejs
2. 在 express 的实例对象上 ，设置使用哪种模板引擎，并设置模板引擎的模板存放路径
3. 通过 res.render 去渲染模板。 （res.sendFile）


## ? 现在我们通过模板引擎的方式渲染出来的数据，与上午通过js的方式渲染出来的数据，有什么优势

1. 写起来方便
2. 对搜索引擎友好
