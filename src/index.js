import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre le chemin absolu vers le .env à la racine du projet
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Ici on précise le chemin vers le .env situé à la racine
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import profileRoute from './routes/profile.js';

const app = express();
app.use(express.json());

console.log("AAAA--------------- Using Randommer API key:", process.env.RANDOMMER_API_KEY);

app.use('/api', profileRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Data Aggregation API is running 🚀' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
