import express from 'express';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes.js';
import lBoardRoutes from './routes/lBoardRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use('/badges', express.static(path.join(__dirname, 'public/badges')));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/leaderboard', lBoardRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
