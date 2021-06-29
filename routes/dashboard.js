var express = require('express');
var router = express.Router();
var dashboardController=require("../controllers/dashboard");
var {authenticate}=require("../midlewares/auth");
var {documentUpload}=require("../config/multer");
/* GET users listing. */
router.get('/', authenticate, dashboardController.dashboard);
router.post('/uploaddl',authenticate,documentUpload.single("file"),dashboardController.uploaddl);
module.exports = router;
