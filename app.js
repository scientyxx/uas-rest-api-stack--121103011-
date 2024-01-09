  // app.js
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const apiRouter = require('./routes/api');
const sequelize = require('./db'); // Sesuaikan dengan lokasi file inisialisasi Sequelize

const app = express();
const port = process.env.PORT || 3000;

// Middleware lainnya
// Contoh route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Mount router
app.use('/api', apiRouter);

app.use((req, res, next) => {
  req.sequelize = sequelize;
  next();
});

// Middleware lainnya

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
