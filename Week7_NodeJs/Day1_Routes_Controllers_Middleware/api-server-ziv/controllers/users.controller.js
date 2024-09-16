const { users } = require("../config/data.js");
// console.log(users);
const getAllUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getAllUsers,
};
