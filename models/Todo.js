const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Todo', todoSchema);