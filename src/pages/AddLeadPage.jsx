import React, { useState } from 'react';

export default function AddLeadPage({ onAddLead, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    source: 'Website',
    status: 'New',
    notes: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Full Name and Email Address are required.');
      return;
    }

    const todayDate = new Date().toISOString().split('T')[0];

    const newLead = {
      id: `lead-${Date.now()}`,
      ...formData,
      createdAt: todayDate
    };

    onAddLead(newLead);
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>Create New Client Lead</h2>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="e.g. sarah@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-input"
                placeholder="e.g. +1 (555) 234-5678"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              name="company"
              className="form-input"
              placeholder="e.g. TechNova Solutions"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Lead Source</label>
              <select
                name="source"
                className="form-select"
                value={formData.source}
                onChange={handleChange}
              >
                <option value="Website">Website</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Instagram">Instagram</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Converted">Converted</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Notes & Requirements</label>
            <textarea
              name="notes"
              className="form-textarea"
              placeholder="Add any specific details, project requirements, or meeting notes..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save & Create Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
