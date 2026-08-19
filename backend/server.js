const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/minicrm';

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Mini CRM API is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/leads', leadRoutes);

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    family: 4
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });