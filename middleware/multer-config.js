// Importations
const multer = require("multer");

// Le package multer a besoin de connaître la destination du fichier ainsi que le nom de fichier souhaité.
// Il nous faut utiliser le type MIME d'un fichier pour déterminer son format, et donc trouver son extension. Multer ne le donne pas.

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "jpg",
};

// Objet de configuration
// Le package multer ajoute une propriété req.file 
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("image");
