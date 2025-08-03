import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/DashboardPage.jsx';
import Leaderboard from './pages/LBoardPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
