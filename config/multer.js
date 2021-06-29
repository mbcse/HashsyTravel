var multer = require("multer");
var path=require("path");
var documentuploadstorage = multer.diskStorage({
    destination: "./public/doc_uploads/",
    filename: (req, file, cb) => {
      cb(null, "doc" + "_" + Date.now() + path.extname(file.originalname));
    },
  });
  
  var documentUpload = multer({ storage: documentuploadstorage });

  module.exports={documentUpload};