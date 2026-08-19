const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    company: {
      type: String,
      trim: true,
      default: ''
    },
    source: {
      type: String,
      enum: ['Website', 'LinkedIn', 'Instagram', 'Referral', 'Other'],
      default: 'Website'
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Converted'],
      default: 'New'
    },
    notes: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Lead', leadSchema);
