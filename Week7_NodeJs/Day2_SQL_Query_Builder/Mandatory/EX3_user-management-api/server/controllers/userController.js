const bcrypt = require('bcrypt');

//

// # registrer
const registrerUser = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hashedPassword(password, 10);

    const userId = await usermodel.createUser({
      email,
      username,
      first_name,
      last_name,
      password: hashedPassword,
    });
    res.status(200).json({ message: 'User : Succesfully registered ', userId });
  } catch (error) {
    res.status(404).json({ err: ' Failed try again' });
  }
};

//

// # log user route post/log

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

//
//
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

//

//
const getUserById = async (req, res) => {
  try {
    const uptated = await userModel.uptadeUserById(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: ' not found ' });
    }

    res.status(200).json({ message: 'user updatd ' });
  } catch (err) {
    res.status(404).json({ error: ' Failed uptat' });
  }
};
