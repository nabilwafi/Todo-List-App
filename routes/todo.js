const router = require('express').Router();
const Todo = require('../models/Todo');

router.post('/add/todo', async (req, res) => {
  const { todo } = req.body;

  const newTodo = new Todo({ todo });

  await newTodo
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.delete('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

module.exports = router;