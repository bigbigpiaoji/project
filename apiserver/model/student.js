const db = require('../config/db');

const schema = db.Schema({
  studentName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  grade: {
    type: String,
    required: true
  }
})

module.exports = db.model('student', schema);
