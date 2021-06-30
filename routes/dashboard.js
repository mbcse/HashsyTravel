var express = require('express');
var router = express.Router();
var dashboardController=require("../controllers/dashboard");
var {authenticate}=require("../midlewares/auth");
var {documentUpload}=require("../config/multer");
/* GET users listing. */
router.get('/', authenticate, dashboardController.dashboard);
router.post('/uploaddl',authenticate,documentUpload.single("file"),dashboardController.uploaddl);
router.post('/uploadrc',authenticate,documentUpload.single("file"),dashboardController.uploadrc);
router.post('/uploadis',authenticate,documentUpload.single("file"),dashboardController.uploadis);
router.post('/uploadpo',authenticate,documentUpload.single("file"),dashboardController.uploadpo);

router.post('/confirmblockchainupload',authenticate,dashboardController.confirmUploadToBlockchain);

module.exports = router;
