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

// --- MongoDB connection (serverless-safe) ---
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(MONGO_URI);
  isConnected = true;
  console.log('Successfully connected to MongoDB.');
}

// Ensure DB is connected before handling ANY request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    res.status(500).json({ message: 'Database connection failed', error: err.message });
  }
});

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

// Start Server (only relevant for local dev; Vercel ignores this)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
