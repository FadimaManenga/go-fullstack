// Importations
const { json } = require("body-parser");
const Thing = require("../models/Thing");
const fs = require("fs");

// Les données entrantes sont sous la forme de form-data . Il faut donc utiliser JSON.parse() pour transformer des chaînes de caractères en JSON exploitable.

// Exportations de méthodes pour les routes

exports.createThing = (req, res, next) => {
  const thingObject = JSON.parse(req.body.thing);

  // enlever le champ id du corps de la requete (car c'est mongo qui a le bon)
  delete thingObject._id;

  const thing = new Thing({
    ...thingObject,
    // récupération du segment de base de l'URL
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  // enregistrement dans la bdd
  thing
    .save()
    // renvoyer une réponse sinon la requête du front va expirer
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    // error = raccourci js de error: error
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
  const thingObject = req.file
    ? {
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body.thing };

  Thing.updateOne(
    { _id: req.params.id },
    { ...thingObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => {
      // extraction du nom du fichier à supprimer
      const filename = thing.imageUrl.split("/images/")[1];
      // supprimer
      // La fonction unlink permet de supprimer des fichiers du système de fichiers.
      fs.unlink(`images/${filename}`, () => {
        Thing.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  // req.params.id
  // comparaison entre l'id du paramètre url et l'_id de l'objet envoyé par mongoDB
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllThings = (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};
