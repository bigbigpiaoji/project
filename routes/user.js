const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const UserModel = require('../model/user');

// /api/user/sign-up
router.post('/sign-up', (req, res) => {
  UserModel.findOne({
    username: req.body.username
  }).then(data => {
    if (data) {
      res.send({
        code: -1,
        msg: '用户名已注册'
      })
    } else {
      // 先加密
      let hashPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = hashPassword;
      let user = new UserModel(req.body);
      user.save()
        .then(data => {
          res.send({
            code: 0,
            msg: 'ok'
          })
        })
        .catch(error => {
          console.log(error.message);
          res.send({
            code: -1,
            msg: '网路异常，请稍后重试'
          })
        })
    }
  })
})

// /api/user/sign-in
router.post('/sign-in', (req, res) => {
  // console.log('ajax的登录进来了');
  let username = req.body.username;
  let password = req.body.password;
  // console.log(username);
  // console.log(password);
  UserModel.findOne({
    username,
  }).then(data => {
    // console.log(data); // data 就是找到的那个记录的对象
    if (data) {
      // 在比较密码
      let isOk = bcrypt.compareSync(password, data.password);
      if (isOk) {
        res.send({
          code: 0,
          msg: 'ok',
          data: data
        })
      } else {
        // 密码错误
        res.send({
          code: -1,
          msg: '用户名或密码错误'
        })
      }
    } else {
      // 用户名错误
      res.send({
        code: -1,
        msg: '用户名或密码错误'
      })
    }
  }).catch(error => {
    console.log(error.message);
    res.send({
      code: -1,
      msg: '网络异常...'
    })
  })
})

module.exports = router;
