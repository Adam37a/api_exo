import express from 'express';
import { runPipeline } from '../pipeline.js';
import { enrichWithDarkData } from '../utils/darkData.js';

const router = express.Router();

router.get('/profile', async (req, res) => {
  try {
    const baseData = await runPipeline();
    const fullProfile = enrichWithDarkData(baseData);
    res.status(200).json(fullProfile);
  } catch (err) {
    console.error('[ERROR] /profile ->', err.message);
    res.status(500).json({ error: 'Pipeline failed', detail: err.message });
  }
});

export default router;
