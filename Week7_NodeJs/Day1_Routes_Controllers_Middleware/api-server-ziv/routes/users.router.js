const express = require("express");
const { getAllUsers } = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
