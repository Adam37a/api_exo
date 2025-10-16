# 🌐 Data Aggregation API

Une API REST développée en **Node.js + Express**, qui agrège plusieurs sources de données externes (RandomUser, Randommer, Joke API, Meowfacts) pour générer un **profil utilisateur complet**, enrichi de **dark data** calculées dynamiquement.

---

## 🚀 Fonctionnalités

- Agrégation de données depuis plusieurs APIs externes :
  - [randomuser.me](https://randomuser.me/api)
  - [randommer.io](https://randommer.io)
  - [official-joke-api](https://official-joke-api.appspot.com)
  - [meowfacts.herokuapp.com](https://meowfacts.herokuapp.com)
- Normalisation des données dans un seul schéma cohérent
- Génération de **dark data** :
  - `riskScore` : score de risque selon le pays
  - `ibanLength` : longueur de l’IBAN
  - `cardMasked` : numéro de carte masqué
  - `userHash` : identifiant unique dérivé de l’email

---

## 🛠️ Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/Adam37a/api_exo.git
cd api_exo


npm install express
npm install axios
npm install dotenv
npm install --save-dev nodemon

```
ou 
```
npm install
```

renommer le fichier .env.template en .env et ajoutez votre clé d'api Randommer

lancez le serveur avec : 
```
npm run dev
```

et l'url de l'api (pour GET) est sur :
```
http://localhost:5000/api/profile
```
