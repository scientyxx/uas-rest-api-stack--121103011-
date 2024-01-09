const { User } = require('../models/userModel');
const mysql = require('mysql');

// Buat koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example_password',
  database: 'sample_db'
});

// Koneksikan ke database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// GET all users
const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM user';
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
};

// GET user by ID
const getUserById = (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM user WHERE id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
};

// POST create new user
const createUser = (req, res) => {
  const { username } = req.body;
  const query = 'INSERT INTO user (username, created_at) VALUES (?, ?)';
  const newUser = { username, created_at: new Date() };
  db.query(query, [newUser.username, newUser.created_at], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    newUser.id = result.insertId;
    res.status(201).json(newUser);
  });
};

// PUT update user by ID
const updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const query = 'UPDATE user SET username = ? WHERE id = ?';
  db.query(query, [updatedUser.username, userId], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'User updated successfully' });
  });
};

// DELETE user by ID
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM user WHERE id = ?';
  db.query(query, [userId], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'User deleted successfully' });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
