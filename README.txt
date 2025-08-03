Intern Portal – Full Stack Project
A simple Intern Dashboard Portal built using the ERN stack (Express, React, Node.js) with a dummy JSON backend and a clean, responsive frontend.

Project Features
Dummy Login Page (frontend only, no real authentication)

Intern Dashboard showing:

Intern Name

Referral Code

Total Donations Raised

Rewards/Badges Section (3 sample badges)

Leaderboard Page with dummy data

Backend API providing dummy user and leaderboard data via JSON

Clean and responsive UI ready for styling and enhancements

Folder Structure
php
Copy
Edit
Intern-Portal/
│
├── backend/
│   ├── server.js                # Main server file
│   ├── routes/
│   │    ├── userRoutes.js       # Handles /api/user
│   │    └── lBoardRoutes.js     # Handles /api/leaderboard
│   ├── data/
│   │    ├── userData.json       # Dummy user data
│   │    └── lBoardData.json     # Dummy leaderboard data
│   └── public/
│        └── badges/             # Badge images (bronze, silver, gold)
│
├── frontend/
│   ├── public/
│   │    └── index.html          # Entry point for React
│   └── src/
│        ├── pages/
│        │    ├── LoginPage.jsx
│        │    ├── DashboardPage.jsx
│        │    └── LeaderboardPage.jsx
│        ├── services/
│        │    └── api.js         # Handles API calls to backend
│        ├── App.jsx
│        ├── main.jsx
│        ├── App.css
│        └── index.css
│
└── README.txt                   # Project instructions
Installation and Running Locally
1. Clone the Repository
bash
Copy
Edit
git clone <your-repo-link>
cd Intern-Portal
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
node server.js
Server runs at: http://localhost:5000

Test endpoints in browser or Postman:

http://localhost:5000/api/user

http://localhost:5000/api/leaderboard

3. Frontend Setup
Open a new terminal in the frontend folder:

arduino
Copy
Edit
cd frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

Usage
Open the frontend in the browser.

Use the dummy login to navigate to the dashboard.

View the dashboard details including name, referral code, total donations, and rewards.

Navigate to the leaderboard page to view dummy leaderboard data.

