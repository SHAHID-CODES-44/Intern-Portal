import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
const dataPath = path.join(__dirname, 'data', 'userData.json');

  try {
    const userData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
