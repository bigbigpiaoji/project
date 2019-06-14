// 这个文件专门处理页面请求
const express = require('express');
const http = require('http');
const querystring = require('querystring');
const path = require('path');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.render('hello', {
    name: '张三',
    userName: undefined, // 当前登录的用户的名字

    str: '<h1>hello world</h1>'
  })
})

router.get('/world', (req, res) => {
  res.render('world.jade');
})

// 首页
router.get('/', (req, res) => {
  // 判断用户是否登录
  if (!req.cookies.userInfo) {
    // 没有登录 - 跳转到登录页面
    res.redirect('/login');
    return;
  }

  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;

  // 1. 先从数据库中来数据 直接去请求 http://loclahost:8080/api/student 的数据 普通请求 http.get
  let url = `http://localhost:8080/api/student?pageNum=${pageNum}&pageSize=${pageSize}`;
  http.get(url, (response) => {
    let buf = '';
    response.on('data', (chunk) => {
      buf += chunk;
    })
    response.on('end', () => {
      // console.log(buf);
      let data = JSON.parse(buf);

      res.render('index', {
        name: '张三',
        list: data.data.list,
        totalPage: data.data.totalPage,
        pageNum: pageNum,
        pageSize: pageSize
      });
    })
  })
})

// 注册页
router.get('/register.html', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../views/register.html'));
  res.render('register')
})

// 登录页
router.get('/login', (req, res) => {
  res.render('login')
})

// 处理登录的代码
router.post('/handleLogin', (req, res) => {
  // 1. 拿到用户传递过来的用户名与密码
  let username = req.body.username;
  let password = req.body.password;

  // postData 就是要传递的参数
  let postData = querystring.stringify({
    username: username,
    password: password
  })

  let request = http.request('http://localhost:8080/api/user/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, (response) => {
    let buf = '';
    response.on('data', (chunk) => {
      buf += chunk;
    })

    response.on('end', () => {
      // console.log(buf)
      let data = JSON.parse(buf);
      console.log(data);
      if (data.code === 0) {
        // 登录成功
        // 1. 写入cookie
        res.cookie('userInfo', JSON.stringify({ username: data.data.username }), {
          maxAge: 1000 * 60
        })
        res.redirect('/');
      } else {
        // 登录失败
        res.send('登录失败');
      }
    })
  })

  request.write(postData);
  request.end();
})

module.exports = router;
