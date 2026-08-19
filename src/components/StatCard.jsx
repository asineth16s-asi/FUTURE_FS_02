import React from 'react';

export default function StatCard({ label, value, icon, colorClass }) {
  return (
    <div className="stat-card">
      <div className="stat-info">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
      </div>
      <div className={`stat-icon-wrapper ${colorClass}`}>
        {icon}
      </div>
    </div>
  );
}
