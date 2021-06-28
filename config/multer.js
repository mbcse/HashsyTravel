var multer = require("multer");

var documentuploadstorage = multer.diskStorage({
    destination: "./public/doc_uploads",
    filename: (req, file, cb) => {
      cb(null, "doc" + "_" + Date.now() + path.extname(file.originalname));
    },
  });
  
  var documentupload = multer({ storage: documentuploadstorage });