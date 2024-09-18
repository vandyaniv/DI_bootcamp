const taskModel = require('../models/model.js');

const getAllTask = (req, res) => {
  const task = taskModel.getAllTask();
  return res.status(200).json(task);
};

//
const getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskModel.getTaskById(taskId);
  if (task) {
    res.status(200).json({ message: ` if find ${taskId} sending` });
  } else {
    res
      .status(404)
      .json({ message: ` message from getTaskById, the ${taskId} not found` });
  }
};

// POST /tasks: Create a new task and store it in the JSON file.

const createTask = (req, res) => {
  const { name } = req.body;

  const newTask = taskModel.createTask(name);
  if (newTask) {
    return res.status(200).json({
      message: ` The message from controller, task created`,
      task: newTask,
    });
  } else {
    return res.status(400).json({
      message: ` the new task  ${newTask}  failed name is requiered `,
    });
  }
};

// PUT /tasks/:id: Update a task by ID in the JSON file.
const updatedTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const { name } = req.body;

  const updateTask = taskModel.updatedTask(taskId, name);

  if (updatedTask) {
    return res.status(200).json({
      message: ` Uptading our Task Id : ${taskId} succes `,
      name: updateTask,
    });
  } else {
    return res.status(404).json({ message: ` The Task Id failed updating ` });
  }
};
///////

const deletTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const deletTask = taskModel.deletTask(taskId);

  if (deletTask) {
    return res
      .status(200)
      .json({ message: ` ${taskId} succesfully delet`, task: deletTask });
  } else {
    return res.status(404).json({ message: ` the ${taskId} not found` });
  }
};
// # E x p o r t
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  deletTask,
  updatedTask,
};
