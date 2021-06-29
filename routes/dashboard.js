var express = require('express');
var router = express.Router();
var dashboardController=require("../controllers/dashboard");
var {authenticate}=require("../midlewares/auth");
/* GET users listing. */
router.get('/', authenticate, dashboardController.dashboard);
router.post('/uploaddl',authenticate,dashboardController.uploaddl);
module.exports = router;
