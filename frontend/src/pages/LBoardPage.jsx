import { useEffect, useState } from 'react';
import { FaHome, FaTrophy, FaCrown, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./LBoard.css";

function LeaderboardPage() {
  const navigate = useNavigate();
  const [leaders, setLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        setLeaders(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div id="leaderboard-page-container">
      <nav id="leaderboard-navbar">
        <div id="leaderboard-nav-content">
          <button 
            id="leaderboard-home-button" 
            className="nav-btn"
            onClick={() => navigate('/')}
          >
            <FaHome className="nav-icon" /> Home
          </button>
        </div>
      </nav>

      <div id="leaderboard-container">
        <header className="leaderboard-header">
          <h1 className="leaderboard-title">
            <FaTrophy className="title-icon" /> Leaderboard
          </h1>
          <p className="leaderboard-subtitle">Top donors ranked by total donations</p>
        </header>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading leaderboard...</p>
          </div>
        ) : leaders.length === 0 ? (
          <div className="empty-state">
            <p>No leaderboard data available</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="table-rank">Rank</th>
                  <th className="table-name">Name</th>
                  <th className="table-donations">Total Donations</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((user, index) => (
                  <tr 
                    key={user.id || index} 
                    className={`leaderboard-row ${index < 3 ? `top-${index + 1}` : ''}`}
                  >
                    <td className="table-rank">
                      {index < 3 ? <FaCrown className={`rank-icon rank-${index + 1}`} /> : null}
                      #{index + 1}
                    </td>
                    <td className="table-name">{user.name}</td>
                    <td className="table-donations">
                      <FaRupeeSign className="rupee-icon" /> {user.donations.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeaderboardPage;