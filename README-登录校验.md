# 是否有登录状态的判断

1. 前后端不分离的项目中，cookie-session
2. 前后端分离的项目中，jsonwebtoken(jwt)

## cookie-session

简单实现: 在后台的路由代码中，对请求的cookie做判断，如果有相应的cookie信息，就认为已经登录过了，不做限制，如果没有的话，就可以认为没有登录，让他去登录（跳转到登录页面）。后续再登录上面，如果用户登录成功需要写cookie

简单实现的问题：目前只判断了cookie中是否有userInfo的cookie信息，这种情况，坏人可以在不登录的情况，直接在浏览器通过js代码写cookie。来伪造登录状态。（不安全）

加强版：不光要判断cookie是否携带者 userInfo 的信息，还需要判断 userInfo 这个信息的有效性
。

session与cookie校验的流程：

1. 登录成功，给 session 中写入当前登录用户的信息，并写入一个跟当前session相关的cookie给前端浏览器

a: {

}

  sessions : {
    'a': {

    },
    'b': {

    },
    'c': {

    }
  }
2. 后续所有的请求，http 请求头中都会存在一个 cookie 这个cookie里面的value值，就是某个session的key值。我后端可以根据这个 key 值，去拿到具体的session数据

#### cookie与session的实现
1. express-session 的模块 (中间件)
   1. npm install express-session
2. 使用 session 这个中间件
3. 登录的时候给 session 写数据
4. 判断 session 数据的情况
