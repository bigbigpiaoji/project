// 测试 bcrypt 的使用
const bcrypt = require('bcrypt');

// params1 需要加密的数据
// params2 加密的等级 [1, 10]
// params3 回调函数 (err, data)
          // err - 加密失败
          // data - 加密成功之后的数据
          // $2b$10$v8pB2bBLmE0qRHFE2YX3OebOQ3GVazVE4L5hGyuYlCNb2CYaVGBue
          // $2b$10$hGVj/63mz9bdyrmwrd.cSeMB1wddYa8nr.dRStLMk61u7bPsS/SSy
// bcrypt.hash('123', 10, (err, data) => {
//   if (err) {
//     console.log('加密失败');
//   } else {
//     console.log('加密成功');
//     console.log(data);
//   }
// })

// let data = bcrypt.hashSync('456', 10);
// console.log(data);

// 校验密码是否正确
// bcrypt.compare('123', '$2b$10$hGVj/63mz9bdyrmwrd.cSeMB1wddYa8nr.dRStLMk61u7bPsS/SSy', (err, isOk) => {
//   if (err) {
//     console.log('校验失败')
//   } else {
//     if (isOk) {
//       // 成功
//       console.log('密码匹配')
//     } else {
//       console.log('密码不匹配')
//     }
//   }
// })

let isOk = bcrypt.compareSync('4567', '$2b$10$udjcVaUZdiENaLMwOMjnCuJ42wP/SPn4uO2tWETh.2aBCBR55M0ee');
console.log(isOk);
