import { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';
import { FaHome, FaCopy, FaTrophy, FaHandHoldingHeart, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./DashBoardPage.css"

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchUserData().then(data => setUser(data));
  }, []);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!user) return <p id="dashboard-loading">Loading...</p>;

  return (
    <div id="dashboard-page-container">
      <nav id="dashboard-navbar">
        <div id="dashboard-nav-content">
          <button 
            id="dashboard-home-button" 
            className="nav-btn"
            onClick={() => navigate('/')}
          >
            <FaHome className="nav-icon" /> Home
          </button>
        </div>
      </nav>

      <div id="dashboard-container">
        <header id="dashboard-header">
          <h1 className="dashboard-title">Welcome, {user.name}!</h1>
          <p className="dashboard-subtitle">Your Intern Dashboard</p>
        </header>

        <div className="dashboard-grid">
          <section id="dashboard-referral" className="dashboard-card">
            <div className="card-header">
              <FaTrophy className="section-icon" />
              <h2 className="section-title">Referral Code</h2>
            </div>
            <div className="card-content">
              <p className="referral-code">{user.referralCode}</p>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`} 
                onClick={copyReferralCode}
              >
                <FaCopy /> {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <a href="/leaderboard" className="leaderboard-link">
              View Leaderboard <FaTrophy />
            </a>
          </section>

          <section id="dashboard-donations" className="dashboard-card">
            <div className="card-header">
              <FaHandHoldingHeart className="section-icon" />
              <h2 className="section-title">Total Donations Raised</h2>
            </div>
            <div className="card-content">
              <p className="donation-amount">₹{user.totalDonations.toLocaleString()}</p>
            </div>
          </section>

          <section id="dashboard-rewards" className="dashboard-card">
            <div className="card-header">
              <FaAward className="section-icon" />
              <h2 className="section-title">Your Rewards</h2>
            </div>
            <div className="rewards-container">
              {user.rewards.map((badge, index) => (
                <div key={index} className="reward-card">
                  <img
                    src={`http://localhost:5000${badge.image}`}
                    alt={badge.name}
                    className="reward-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100?text=Badge';
                    }}
                  />
                  <p className="reward-name">{badge.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;