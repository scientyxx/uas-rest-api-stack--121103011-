
const { User } = require('../models/userModel');
// Create
exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Read All
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Read One
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email } = req.body;
    const [updatedRows] = await User.update({ username, email }, { where: { id: userId } });
    if (updatedRows > 0) {
      const updatedUser = await User.findByPk(userId);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedRows = await User.destroy({ where: { id: userId } });
    if (deletedRows > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
