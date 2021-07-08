// Importations
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

// Connection de l'API à la bdd mongoDB que l'on a créée
// .serve dans gitignore
// .connect(process.env.MONGO_DB,
// MDP : 8n3Cvr6cpfStNtlh
// USER : openclassrooms1
mongoose
  .connect(
    "mongodb+srv://openclassrooms1:8n3Cvr6cpfStNtlh@cluster0.z4qip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Création de l'app
const app = express();

// middleware général 1 pour définir les headers de toutes les requetes
app.use((req, res, next) => {
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware qui permet l'accès statique à des images
app.use("/images", express.static(path.join(__dirname, "images")));

// Utilisation des routes
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

// Exportation de l'app pour utilisation par d'autres fichiers, notamment le serveur Node.
module.exports = app;
