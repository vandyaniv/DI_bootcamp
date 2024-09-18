const express = require('express');
const router = express.Router();
const TaskController = require('../controller/controller.js');

router.get('/', TaskController.getAllTask);
router.get('/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updatedTask);
router.delete('/:id', TaskController.deletTask);

module.exports = router;
