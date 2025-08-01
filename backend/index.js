require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(process.env.PORT || 4000, () => {
      console.log(`🚀 Servidor en puerto ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => console.error('❌ Error al conectar MongoDB', err));
