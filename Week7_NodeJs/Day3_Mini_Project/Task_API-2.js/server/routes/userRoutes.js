const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/register', userController.registerUser);

// export the router for the other
module.exports = router;
