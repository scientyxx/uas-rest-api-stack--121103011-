// routes/api.js

const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

// Create
router.post('/users', crudController.createUser);

// Read All
router.get('/users', crudController.getAllUsers);

// Read One
router.get('/users/:id', crudController.getUserById);

// Update
router.put('/users/:id', crudController.updateUser);

// Delete
router.delete('/users/:id', crudController.deleteUser);

module.exports = router;
