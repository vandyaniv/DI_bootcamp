const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
//registerUser # 1

const registerUser = async (req, res) => {
  try {
    const { username, email, password, last_name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userModel.createUser({
      username,
      email,
      last_name,
      password: hashedPassword,
    });

    if (newUser) {
      res.status(200).json({ message: ' User  registered successfully' });
    } else {
      res.status(404).json({ message: ' User registration Failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'HTTP 500 Internal Server', error });
  }
};

module.exports = {
  registerUser,
};
