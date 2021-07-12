// Importations
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

// Connection de l'API à la bdd mongoDB que l'on a créée

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Création de l'app
const app = express();

// middleware général 1 pour définir les headers de toutes les requetes

// Configurer les bons headers sur l'objet réponse permet l'envoi et la réception de requêtes et de réponses sans erreurs CORS.
app.use((req, res, next) => {
  // res.json({ message: 'Votre requête a bien été reçue !' });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// middleware général 2 qui transforme le corps des requetes en JSON

// Quand une requête HTTP est reçue par le serveur, son corps est rarement sous forme utile. Le package body-parser analyse le corps de la requête et le formate pour en faciliter l'exploitation.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware qui permet l'accès statique à des images
app.use("/images", express.static(path.join(__dirname, "images")));

// Utilisation des routes
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

// Exportation de l'app pour utilisation par d'autres fichiers, notamment le serveur Node.
module.exports = app;
