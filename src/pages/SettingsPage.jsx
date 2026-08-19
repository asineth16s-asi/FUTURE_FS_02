import React from 'react';

export default function SettingsPage({ leadsCount, onResetData, user }) {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Account Settings Card */}
      <div className="card">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Admin Profile</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div className="admin-avatar" style={{ width: '56px', height: '56px', fontSize: '1.4rem' }}>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>{user?.name || 'Administrator'}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{user?.email || 'admin@minicrm.com'}</p>
            <span className="badge badge-converted" style={{ marginTop: '6px' }}>Active Session</span>
          </div>
        </div>
      </div>

      {/* Local Storage & System Settings */}
      <div className="card">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Data & LocalStorage Management</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          All leads and login sessions are persisted directly in your web browser's <code>localStorage</code>.
        </p>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '20px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Currently Saved Leads:</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>{leadsCount} Leads</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Restore Default Sample Leads</h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Reset browser storage to re-populate the 8 original demonstration leads.
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onResetData}>
            Reset Sample Data
          </button>
        </div>
      </div>

      {/* Internship Project Info Card */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)', borderColor: '#c084fc' }}>
        <h2 style={{ fontSize: '1.1rem', color: 'var(--purple)', marginBottom: '8px' }}>Future Interns - Task 2 Project</h2>
        <p style={{ fontSize: '0.875rem', color: '#4c1d95', lineHeight: 1.6 }}>
          This Client Lead Management System (Mini CRM) was engineered using <strong>React</strong>, <strong>Vite</strong>, <strong>JavaScript</strong>, <strong>Vanilla CSS</strong>, and <strong>localStorage</strong>. Built clean, fast, fully responsive, and easy to maintain.
        </p>
      </div>
    </div>
  );
}
