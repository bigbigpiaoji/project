// 这个文件专门处理页面请求
const express = require('express');
const path = require('path');
const router = express.Router();

// 首页
router.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../views/index.html'));
  // render 的第二个参数，是带到模板上的数据。
  res.render('index', {
    name: '张三',
    list: [
      {
        name: '张三',
        age: 19,
        grade: 'sz-1904'
      },
      {
        name: '王五',
        age: 18,
        grade: 'sz-1903'
      }
    ]
  });
})

// 注册页
router.get('/register.html', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../views/register.html'));
  res.render('register')
})

module.exports = router;
