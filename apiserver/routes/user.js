const express = require('express');
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
  UserModel.findOne(req.body)
    .then(data => {
      if (data) {
        res.send({
          code: 0,
          msg: 'ok'
        })
      } else {
        res.send({
          code: -1,
          msg: '用户名或密码错误'
        })
      }
    })
    .catch(error => {
      console.log(error.message);
      res.send({
        code: -1,
        msg: '网络异常...'
      })
    })
})

module.exports = router;
