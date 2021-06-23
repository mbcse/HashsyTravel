var express = require('express');
var router = express.Router();
var indexController=require("../controllers/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
