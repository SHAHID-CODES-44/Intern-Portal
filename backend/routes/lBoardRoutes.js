import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'lBoardData.json');
  const leaderboard = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  leaderboard.sort((a, b) => b.donations - a.donations);

  res.json(leaderboard);
});

export default router;
