const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');
const methodOverride = require('method-override');
const app = express();

// Connection to Mongodb
mongoose.connect('mongodb://localhost/todo_list', {useNewUrlParser: true, useUnifiedTopology: true});

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/', todoRouter);

// Listen PORT
app.listen(process.env.PORT || 3000, () => {
  console.log('listen PORT on 3000');
});