const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Routes will be here...
router.get('/', async (req, res) => {
  const allTodo = await Todo.find();
  res.render('index', {todos: allTodo});
});


module.exports = router;