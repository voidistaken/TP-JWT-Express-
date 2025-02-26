Ce projet est une API REST développée avec Node.js, Express et MongoDB, permettant la gestion des clients. L'authentification est sécurisée avec JWT (JSON Web Token).

🛠 Technologies utilisées

Node.js

Express.js

MongoDB avec Mongoose

bcryptjs (pour le hachage des mots de passe)

jsonwebtoken (JWT) (pour l'authentification)

dotenv (pour la gestion des variables d'environnement)

📌 Installation

Cloner le projet

git clone https://github.com/votre-repo.git
cd votre-repo

Installer les dépendances

npm install

Créer un fichier .env et ajouter :

SECRET_KEY=votreCleSecreteSuperSecurisee
MONGO_URI=mongodb+srv://votreConnexionMongoDB

Lancer le serveur

npm start

📌 Fonctionnalités

🔹 CRUD des Clients

GET /clients → Récupérer tous les clients

GET /clients/:id → Récupérer un client par ID

POST /clients → Ajouter un nouveau client (avec hachage du mot de passe)

PUT /clients/:id → Modifier un client

DELETE /clients/:id → Supprimer un client

🔹 Authentification avec JWT

POST /login → Vérifie l'email et le mot de passe, puis génère un token JWT

Le token JWT est signé avec la SECRET_KEY et expire après 1 heure

📌 Exemple d'utilisation du Token JWT

Après un login réussi, vous recevez un token comme ceci :

{
    "token": "eyJhbGciOiJIUzI1NiIsInR..."
}

Pour accéder aux routes protégées, ajoutez ce token dans l'en-tête Authorization :

Authorization: Bearer votreToken

📌 Remarque

Si le SECRET_KEY n'est pas défini dans .env, une clé par défaut est utilisée (⚠️ Ne pas utiliser en production !).
Test Creation User in Databse utilisant PostMan :
![image](https://github.com/user-attachments/assets/dc94f6bd-7ede-424f-bede-72ec501fa415)

Apres en login avec User qui on a Creér:

![image](https://github.com/user-attachments/assets/8b4ed623-4f1e-4568-b8b2-e8eec7de433a)

