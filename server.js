const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();

// 引入路由中间件
const pageRouter = require('./routes/page');
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');

// 设置使用的模板引擎是什么，设置模板页面的存放路径
app.set('views', path.resolve(__dirname, './views')); // 设置模板页面的存放路径
app.set('view engine', 'ejs'); // 设置使用 ejs 这款模板引擎

// 静态资源托管
app.use(express.static('public'));

// 设置 req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 设置使用 session
// 使用了 session 中间件之后，提供了一个 req.session 的属性
app.use(session({
  secret: 'MYGOD', // 签名
  resave: true, // 重新设置session
  cookie: {
    maxAge: 1000 * 60 * 10, // 10分钟
  }
}))

// 设置 req.cookies 当使用 session 的时候，它内置了 cookieParser 所以我们不需要写它了
// app.use(cookieParser());

// 设置允许跨域 cors
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, UPDATE, PUT');
  next();
})

app.use('/', pageRouter);
app.use('/api/user', userRouter);
app.use('/api', studentRouter);

app.listen(8080);
