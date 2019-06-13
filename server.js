const express = require('express');
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
