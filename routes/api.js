// routes/api.js

const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/crudController');

// GET all users
router.get('/users', getAllUsers);

// GET user by ID
router.get('/users/:id', getUserById);

// POST create new user
router.post('/users', createUser);

// PUT update user by ID
router.put('/users/:id', updateUser);

// DELETE user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;
