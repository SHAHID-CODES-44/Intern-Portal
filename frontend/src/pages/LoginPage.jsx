import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import "./LoginPage.css"

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigate('/dashboard');    
    } else {
      alert('Please fill in all details');
    }
  };

  const isFormValid = email && password;

  return (
    <div id="login-page-container">
      <nav id="login-navbar">
        <div id="login-nav-content">
          <button 
            id="home-button" 
            className="nav-btn"
            onClick={() => navigate('/')}
          >
            <FaHome className="nav-icon" /> Home
          </button>
        </div>
      </nav>

      <div id="login-container">
        <h1 className="login-title">Intern Portal Login</h1>
        <p className="login-subtitle">Enter your details to access your dashboard</p>

        <div className="login-field">
          <label htmlFor="login-email" className="login-label">Email</label>
          <input
            type="email"
            id="login-email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-field">
          <label htmlFor="login-password" className="login-label">Password</label>
          <input
            type="password"
            id="login-password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          id="login-button"
          className="login-btn"
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          <FaSignInAlt className="btn-icon" /> Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;