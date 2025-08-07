//App.js

const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

module.exports = app;