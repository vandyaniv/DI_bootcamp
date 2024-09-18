const bcrypt = require('bcrypt');
let user = [];

const getUser = () => {
  return user;
};

const createUser = (userData) => {
  const newUser = {
    id: user.length + 1,
    ...userData, //spread operator!
  };
  user.push(newUser);
  return newUser;
};

module.exports = {
  createUser,
};
