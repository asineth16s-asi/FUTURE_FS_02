import React from 'react';

export default function Header({ currentTab, onLogout, mobileOpen, setMobileOpen, user }) {
  const getTitle = () => {
    switch (currentTab) {
      case 'dashboard':
        return 'Dashboard Overview';
      case 'leads':
        return 'Leads Management';
      case 'add-lead':
        return 'Add New Lead';
      case 'settings':
        return 'System Settings';
      default:
        return 'Mini CRM';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <h1 className="page-title">{getTitle()}</h1>
      </div>

      <div className="header-right">
        <div className="admin-profile">
          <div className="admin-avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div className="admin-info">
            <span className="admin-name">{user?.name || 'Administrator'}</span>
            <span className="admin-role">{user?.email || 'admin@minicrm.com'}</span>
          </div>
        </div>

        <button 
          className="btn btn-secondary btn-sm" 
          onClick={onLogout}
          title="Sign out of account"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}
