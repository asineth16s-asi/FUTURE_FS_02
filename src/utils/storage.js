import { INITIAL_LEADS } from '../data/sampleLeads';

const LEADS_KEY = 'mini_crm_leads';
const AUTH_KEY = 'mini_crm_auth';

export const getStoredLeads = () => {
  try {
    const stored = localStorage.getItem(LEADS_KEY);
    if (!stored) {
      localStorage.setItem(LEADS_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : INITIAL_LEADS;
  } catch (error) {
    console.error('Error reading leads from localStorage:', error);
    return INITIAL_LEADS;
  }
};

export const saveStoredLeads = (leads) => {
  try {
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  } catch (error) {
    console.error('Error saving leads to localStorage:', error);
  }
};

export const resetToDefaultLeads = () => {
  try {
    localStorage.setItem(LEADS_KEY, JSON.stringify(INITIAL_LEADS));
    return INITIAL_LEADS;
  } catch (error) {
    console.error('Error resetting leads in localStorage:', error);
    return INITIAL_LEADS;
  }
};

export const getAuthStatus = () => {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (!stored) return { isLoggedIn: false, user: null };
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading auth from localStorage:', error);
    return { isLoggedIn: false, user: null };
  }
};

export const setAuthStatus = (user) => {
  try {
    const authData = { isLoggedIn: true, user };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    return authData;
  } catch (error) {
    console.error('Error saving auth to localStorage:', error);
    return { isLoggedIn: false, user: null };
  }
};

export const clearAuthStatus = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Error clearing auth from localStorage:', error);
  }
};
