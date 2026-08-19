import React from 'react';
import StatCard from '../components/StatCard';

export default function DashboardPage({ leads, onNavigate, onViewLead }) {
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const contactedLeads = leads.filter(l => l.status === 'Contacted').length;
  const convertedLeads = leads.filter(l => l.status === 'Converted').length;

  const newPct = totalLeads ? Math.round((newLeads / totalLeads) * 100) : 0;
  const contactedPct = totalLeads ? Math.round((contactedLeads / totalLeads) * 100) : 0;
  const convertedPct = totalLeads ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'badge-new';
      case 'Contacted': return 'badge-contacted';
      case 'Converted': return 'badge-converted';
      default: return '';
    }
  };

  const recentLeads = [...leads].slice(0, 5);

  return (
    <div>
      {/* Stat Cards Grid */}
      <div className="stats-grid">
        <StatCard
          label="Total Leads"
          value={totalLeads}
          colorClass="stat-icon-blue"
          icon={
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          }
        />

        <StatCard
          label="New Leads"
          value={newLeads}
          colorClass="stat-icon-indigo"
          icon={
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          }
        />

        <StatCard
          label="Contacted Leads"
          value={contactedLeads}
          colorClass="stat-icon-amber"
          icon={
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          }
        />

        <StatCard
          label="Converted Leads"
          value={convertedLeads}
          colorClass="stat-icon-emerald"
          icon={
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          }
        />
      </div>

      {/* Visual Status Overview Bar */}
      <div className="overview-card">
        <div className="overview-header">
          <h3 className="overview-title">Lead Conversion Overview</h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Pipeline Distribution
          </span>
        </div>

        <div className="progress-bar-container">
          <div className="progress-segment new" style={{ width: `${newPct}%` }} title={`New: ${newPct}%`} />
          <div className="progress-segment contacted" style={{ width: `${contactedPct}%` }} title={`Contacted: ${contactedPct}%`} />
          <div className="progress-segment converted" style={{ width: `${convertedPct}%` }} title={`Converted: ${convertedPct}%`} />
        </div>

        <div className="legend-group">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#3b82f6' }}></div>
            <span>New ({newLeads} - {newPct}%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#f59e0b' }}></div>
            <span>Contacted ({contactedLeads} - {contactedPct}%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#10b981' }}></div>
            <span>Converted ({convertedLeads} - {convertedPct}%)</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Snippet */}
      <div className="table-card">
        <div className="overview-header" style={{ padding: '20px 24px 0 24px' }}>
          <h3 className="overview-title">Recent Leads</h3>
          <button className="btn btn-secondary btn-sm" onClick={() => onNavigate('leads')}>
            View All Leads →
          </button>
        </div>

        <div className="table-responsive" style={{ padding: '12px 0 0 0' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Source</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '30px' }}>
                    No leads found. Add your first lead to get started!
                  </td>
                </tr>
              ) : (
                recentLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>
                      <div className="lead-name">{lead.name}</div>
                      <div className="lead-email">{lead.email}</div>
                    </td>
                    <td>{lead.company}</td>
                    <td>{lead.source}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>{lead.createdAt}</td>
                    <td>
                      <button 
                        className="action-btn action-btn-edit" 
                        onClick={() => onViewLead(lead)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
