import React, { useState, useEffect } from 'react';
import { 
  getStoredLeads, 
  saveStoredLeads, 
  resetToDefaultLeads, 
  getAuthStatus, 
  setAuthStatus, 
  clearAuthStatus 
} from './utils/storage';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LeadDetailModal from './components/LeadDetailModal';
import EditLeadModal from './components/EditLeadModal';
import ConfirmModal from './components/ConfirmModal';

import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import LeadsPage from './pages/LeadsPage';
import AddLeadPage from './pages/AddLeadPage';
import SettingsPage from './pages/SettingsPage';

import './App.css';

export default function App() {
  // Authentication State
  const [auth, setAuth] = useState(() => getAuthStatus());

  // Leads State
  const [leads, setLeads] = useState(() => getStoredLeads());

  // Active View Tab ('dashboard', 'leads', 'add-lead', 'settings')
  const [currentTab, setCurrentTab] = useState('dashboard');

  // Mobile Drawer Toggle
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modals
  const [selectedLeadForDetail, setSelectedLeadForDetail] = useState(null);
  const [selectedLeadForEdit, setSelectedLeadForEdit] = useState(null);
  const [selectedLeadForDelete, setSelectedLeadForDelete] = useState(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Sync leads to localStorage whenever state changes
  const updateLeads = (newLeads) => {
    setLeads(newLeads);
    saveStoredLeads(newLeads);
  };

  // Login handler
  const handleLoginSuccess = (userObj) => {
    const newAuth = setAuthStatus(userObj);
    setAuth(newAuth);
    setCurrentTab('dashboard');
    showToast('Welcome back! Successfully logged in.');
  };

  // Logout handler
  const handleLogout = () => {
    clearAuthStatus();
    setAuth({ isLoggedIn: false, user: null });
    showToast('Logged out successfully.');
  };

  // Add Lead handler
  const handleAddLead = (newLead) => {
    const updated = [newLead, ...leads];
    updateLeads(updated);
    showToast(`Lead "${newLead.name}" added successfully!`);
    setCurrentTab('leads');
  };

  // Edit Lead handler
  const handleSaveEditedLead = (updatedLead) => {
    const updated = leads.map(l => l.id === updatedLead.id ? updatedLead : l);
    updateLeads(updated);
    setSelectedLeadForEdit(null);
    showToast(`Lead "${updatedLead.name}" updated successfully!`);
  };

  // Delete Lead handler
  const handleConfirmDelete = () => {
    if (!selectedLeadForDelete) return;
    const targetName = selectedLeadForDelete.name;
    const updated = leads.filter(l => l.id !== selectedLeadForDelete.id);
    updateLeads(updated);
    setSelectedLeadForDelete(null);
    showToast(`Lead "${targetName}" has been deleted.`);
  };

  // Reset Sample Data handler
  const handleResetData = () => {
    const reset = resetToDefaultLeads();
    setLeads(reset);
    showToast('Sample leads restored successfully.');
  };

  // Guard: If not logged in, render Login page
  if (!auth.isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className="main-wrapper">
        <Header
          currentTab={currentTab}
          onLogout={handleLogout}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          user={auth.user}
        />

        <main className="content-area">
          {currentTab === 'dashboard' && (
            <DashboardPage
              leads={leads}
              onNavigate={setCurrentTab}
              onViewLead={setSelectedLeadForDetail}
            />
          )}

          {currentTab === 'leads' && (
            <LeadsPage
              leads={leads}
              onViewLead={setSelectedLeadForDetail}
              onEditLead={setSelectedLeadForEdit}
              onDeleteLead={setSelectedLeadForDelete}
              onNavigate={setCurrentTab}
            />
          )}

          {currentTab === 'add-lead' && (
            <AddLeadPage
              onAddLead={handleAddLead}
              onCancel={() => setCurrentTab('leads')}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsPage
              leadsCount={leads.length}
              onResetData={handleResetData}
              user={auth.user}
            />
          )}
        </main>
      </div>

      {/* Detail Modal */}
      {selectedLeadForDetail && (
        <LeadDetailModal
          lead={selectedLeadForDetail}
          onClose={() => setSelectedLeadForDetail(null)}
          onEdit={(lead) => setSelectedLeadForEdit(lead)}
        />
      )}

      {/* Edit Modal */}
      {selectedLeadForEdit && (
        <EditLeadModal
          lead={selectedLeadForEdit}
          onClose={() => setSelectedLeadForEdit(null)}
          onSave={handleSaveEditedLead}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedLeadForDelete && (
        <ConfirmModal
          title="Delete Lead"
          message={`Are you sure you want to delete lead "${selectedLeadForDelete.name}" (${selectedLeadForDelete.company})? This action cannot be undone.`}
          confirmText="Yes, Delete Lead"
          isDanger={true}
          onConfirm={handleConfirmDelete}
          onCancel={() => setSelectedLeadForDelete(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
