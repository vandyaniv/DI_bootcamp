let task = [
  { id: 1, name: 'first-task' },
  { id: 2, name: 'second-task' },
];

// # Get all task
const getAllTask = () => {
  return task;
};

// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.

const getTaskById = (id) => {
  return task.find((task) => task.id === id);
};

// POST /tasks: Create a new task and store it in the JSON file.
const createTask = (name) => {
  if (!name) return null;
  const newTask = {
    id: task.length + 1,
    name: name,
  };
  task.push(newTask);
  return newTask;
};

// PUT /tasks/:id: Update a task by ID in the JSON file.

const updatedTask = (id, newName) => {
  const foundTask = task.find((task) => task.id === id);

  if (foundTask) {
    foundTask.name = newName;
    return foundTask;
  } else {
    return null;
  }
};
//DELETE /tasks/:id: Delete a task by ID from the JSON file.

const deletTask = (id) => {
  const taskIndex = task.findIndex((tasks) => tasks.id === id);

  if (taskIndex !== -1) {
    const deletTask = task.slice(taskIndex[0]);
    return deletTask[0];
  } else {
    return null;
  }
};

// .. module E X P O R T
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updatedTask,
  deletTask,
};
