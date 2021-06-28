var express = require('express');
var router = express.Router();
var dashboardController=require("../controllers/dashboard");
var {authenticate}=require("../midlewares/auth");
/* GET users listing. */
router.get('/', authenticate, dashboardController.dashboard);

module.exports = router;
