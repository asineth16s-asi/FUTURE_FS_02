import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFillDemo = () => {
    setEmail('admin@minicrm.com');
    setPassword('admin123');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email.trim().toLowerCase() === 'admin@minicrm.com' && password === 'admin123') {
      onLoginSuccess({
        name: 'Admin User',
        email: 'admin@minicrm.com',
        role: 'Administrator'
      });
    } else {
      setError('Invalid email or password. Please use the demo credentials provided below.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">M</div>
          <h2 className="login-title">Mini CRM Admin</h2>
          <p className="login-subtitle">Sign in to manage client leads and sales pipelines</p>
        </div>

        <div className="demo-credentials-box">
          <div className="demo-title">
            <span>Demo Credentials</span>
            <button type="button" className="demo-fill-btn" onClick={handleFillDemo}>
              Auto-fill
            </button>
          </div>
          <div className="demo-item"><strong>Email:</strong> admin@minicrm.com</div>
          <div className="demo-item"><strong>Password:</strong> admin123</div>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="admin@minicrm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
            Sign In to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
