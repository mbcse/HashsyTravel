var express = require('express');
var router = express.Router();
var dashboardController=require("../controllers/dashboard");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
