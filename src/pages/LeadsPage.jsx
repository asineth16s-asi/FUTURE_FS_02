import React, { useState } from 'react';

export default function LeadsPage({ leads, onViewLead, onEditLead, onDeleteLead, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'badge-new';
      case 'Contacted': return 'badge-contacted';
      case 'Converted': return 'badge-converted';
      default: return '';
    }
  };

  // Filter & Search Logic
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      (lead.name && lead.name.toLowerCase().includes(searchLower)) ||
      (lead.email && lead.email.toLowerCase().includes(searchLower)) ||
      (lead.company && lead.company.toLowerCase().includes(searchLower));

    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      {/* Toolbar with Search and Filter */}
      <div className="toolbar-card">
        <div className="search-box">
          <span className="search-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label className="filter-label">Filter Status:</label>
          <select
            className="form-select filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses ({leads.length})</option>
            <option value="New">New ({leads.filter(l => l.status === 'New').length})</option>
            <option value="Contacted">Contacted ({leads.filter(l => l.status === 'Contacted').length})</option>
            <option value="Converted">Converted ({leads.filter(l => l.status === 'Converted').length})</option>
          </select>

          <button className="btn btn-primary btn-sm" onClick={() => onNavigate('add-lead')}>
            + Add Lead
          </button>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="table-card">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Source</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7">
                    <div className="empty-state">
                      <div className="empty-icon">🔍</div>
                      <div className="empty-title">No matching leads found</div>
                      <p>Try adjusting your search criteria or filter options.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>
                      <div className="lead-name">{lead.name}</div>
                      <div className="lead-email">{lead.email}</div>
                    </td>
                    <td>{lead.phone || '-'}</td>
                    <td>{lead.company || '-'}</td>
                    <td>{lead.source}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>{lead.createdAt}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn"
                          onClick={() => onViewLead(lead)}
                          title="View lead details"
                        >
                          View
                        </button>
                        <button
                          className="action-btn action-btn-edit"
                          onClick={() => onEditLead(lead)}
                          title="Edit lead"
                        >
                          Edit
                        </button>
                        <button
                          className="action-btn action-btn-delete"
                          onClick={() => onDeleteLead(lead)}
                          title="Delete lead"
                        >
                          Delete
                        </button>
                      </div>
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
