const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// @route   GET /api/leads
// @desc    Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leads', error: error.message });
  }
});

// @route   GET /api/leads/:id
// @desc    Get single lead by ID
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch lead', error: error.message });
  }
});

// @route   POST /api/leads
// @desc    Create a new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, source, status, notes } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required fields' });
    }

    const newLead = new Lead({
      name,
      email,
      phone: phone || '',
      company: company || '',
      source: source || 'Website',
      status: status || 'New',
      notes: notes || ''
    });

    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create lead', error: error.message });
  }
});

// @route   PUT /api/leads/:id
// @desc    Update an existing lead
router.put('/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update lead', error: error.message });
  }
});

// @route   DELETE /api/leads/:id
// @desc    Delete a lead
router.delete('/:id', async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);

    if (!deletedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ message: 'Lead deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete lead', error: error.message });
  }
});

module.exports = router;
