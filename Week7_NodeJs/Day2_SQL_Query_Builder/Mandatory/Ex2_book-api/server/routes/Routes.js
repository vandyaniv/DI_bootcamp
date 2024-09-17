const express = require('express');
const router = express.Router();

const bookController = require('../controllers/controller.js');

// # Get / api / books use read all the books
router.get('/', bookController.getAllBooks);

// Get api/ book/:Id  Read by a specific ID index value !!!
router.get('/:bookId', bookController.getAllByID);

// POST api / create new arr id : title : '' , ect ect

router.post('/', bookController.createBook);

// nuh nuh every detail is important but checking by hyper-focus not betterway

module.exports = router;
