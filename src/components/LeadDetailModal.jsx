import React from 'react';

export default function LeadDetailModal({ lead, onClose, onEdit }) {
  if (!lead) return null;

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'badge-new';
      case 'Contacted': return 'badge-contacted';
      case 'Converted': return 'badge-converted';
      default: return '';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Lead Information</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{lead.name}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Status</span>
              <div>
                <span className={`badge ${getStatusBadgeClass(lead.status)}`}>
                  {lead.status}
                </span>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{lead.email}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone Number</span>
              <span className="detail-value">{lead.phone || 'N/A'}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Company</span>
              <span className="detail-value">{lead.company}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Lead Source</span>
              <span className="detail-value">{lead.source}</span>
            </div>

            <div className="detail-item full-width">
              <span className="detail-label">Created Date</span>
              <span className="detail-value">{lead.createdAt || 'N/A'}</span>
            </div>

            <div className="detail-item full-width">
              <span className="detail-label">Notes & Remarks</span>
              <div className="detail-notes-box">
                {lead.notes || 'No notes available for this lead.'}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              onClose();
              onEdit(lead);
            }}
          >
            Edit Lead
          </button>
        </div>
      </div>
    </div>
  );
}
