import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Charge le .env correctement, même depuis /src
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import axios from 'axios';

const API_KEY = process.env.RANDOMMER_API_KEY;
console.log("--------------- Using Randommer API key:", API_KEY);

const headers = {
  headers: { 'X-Api-Key': API_KEY }
};

export const runPipeline = async () => {
  const [userRes, ibanRes, phoneRes, jokeRes, catRes, cardRes] = await Promise.all([
    axios.get('https://randomuser.me/api'),
    axios.get('https://randommer.io/api/Finance/Iban/FR', headers),
    axios.get('https://randommer.io/api/Phone/Generate?CountryCode=FR&Quantity=1', headers),
    axios.get('https://official-joke-api.appspot.com/random_joke'),
    axios.get('https://meowfacts.herokuapp.com/'),
    axios.get('https://randommer.io/api/Card', headers)
  ]);

  const user = userRes.data.results[0];
  const card = cardRes.data;

  return {
    fullName: `${user.name.first} ${user.name.last}`,
    gender: user.gender,
    country: user.location.country,
    email: user.email,
    iban: ibanRes.data,
    phone: phoneRes.data[0],
    creditCard: card,
    joke: `${jokeRes.data.setup} - ${jokeRes.data.punchline}`,
    catFact: catRes.data.data[0]
  };
};
