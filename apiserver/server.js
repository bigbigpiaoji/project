const express = require('express');
const app = express();

// 引入路由中间件
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');

// 设置 req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 设置允许跨域 cors
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

app.use('/api/user', userRouter);
app.use('/api', studentRouter);

app.listen(8080);
