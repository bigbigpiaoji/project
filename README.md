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
