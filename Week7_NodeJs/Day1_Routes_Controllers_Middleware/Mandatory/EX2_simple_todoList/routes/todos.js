const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send();
});

// Get all to-do items

router.get('/todos', (req, res) => {
  res.send(200).json(todos);
});

const todos = [];

// add task
router.post('/todos', (req, res) => {
  const newTask = {
    id: todos.length + 1,
    task: req.body.task,
  };
  todos.push(newTask);
  res.status(200).json(todos);
});

// uptading the list
router.post('/todos', (req, res) => {
  const id = parseInt(req.body.id, 10);
  const taskIndex = todos.findIndex((item) => item.id === id);

  if (taskIndex === -1) {
    return res.status(200).json({ Error: ' taks not found ' });
  }
});

// delete a task

router.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const taskIndex = todos.findIndex((item) => item.id === id);
  if (taskIndex === -1) {
    res.status(404).json({ Error: 'ID to delete not found" ' });
  }
  const deleteTask = todos.splice(taskIndex, 1);
  res.status(200).json(deleteTask);
});

module.exports = {
  Myrouter: router,
};

//  node app.js

// node todos.js

/* 

cd /Users/elivanmak/Desktop/DI_bootcamp/Week7_NodeJs/Day1_Routes_Controllers_Middleware/Mandatory/EX2_simple_todoList/routes
*/
