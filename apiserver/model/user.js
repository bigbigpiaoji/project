const db = require('../config/db');
const schema = db.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'http://localhost:8080/avatar.jpg'
  },
  sex: {
    type: Number,
    default: 1
  },
  age: {
    type: Number,
    default: 18
  }
})
module.exports = db.model('user', schema);
