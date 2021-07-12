//Importation
const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
// Si multer est enregistré avant un middleware d'authentification, tout fichier contenu dans une requête, même non authentifiée, sera enregistré sur le système de fichiers. Il est donc essentiel, dans cette situation, d'enregistrer multer après le middleware d'authentification.

/******** Les routes *********/

//middleware de la route post
router.post("/", auth, multer, stuffCtrl.createThing);

// middleware de la route PUT pour modifier une donnée dans la bdd
// Le package multer a besoin de connaître la destination du fichier ainsi que le nom de fichier souhaité.
router.put("/:id", auth, multer, stuffCtrl.modifyThing);

//middleware pour supprimer un objet de la bdd
router.delete("/:id", auth, stuffCtrl.deleteThing);

// middleware de la route get pour récupérer les infos d'un objet et les afficher dans une page produit
router.get("/:id", auth, stuffCtrl.getOneThing);

// middleware de la route get /api/stuff pour récupérer tous les objets de la table (page 'accueil')
router.get("/", auth, stuffCtrl.getAllThings);

module.exports = router;
