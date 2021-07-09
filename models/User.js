// Importations
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Création du schéma
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Application du validateur au schéma
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
