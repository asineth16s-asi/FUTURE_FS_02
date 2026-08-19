import React from 'react';

export default function ConfirmModal({ title, message, onConfirm, onCancel, confirmText = 'Delete', isDanger = true }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-container" style={{ maxWidth: '440px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title" style={{ color: isDanger ? '#dc2626' : 'var(--text-main)' }}>
            {title || 'Confirm Action'}
          </h2>
          <button className="modal-close-btn" onClick={onCancel}>&times;</button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {message || 'Are you sure you want to proceed with this action?'}
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button 
            className={`btn ${isDanger ? 'btn-danger' : 'btn-primary'}`} 
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
