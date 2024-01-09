const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');  // Ubah ini sesuai dengan lokasi sebenarnya file api.js Anda

// Contoh route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Gunakan rute API
app.use('/api', apiRoutes);

// Atur server untuk mendengarkan port tertentu
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
