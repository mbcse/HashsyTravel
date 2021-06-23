var express = require('express');
var router = express.Router();
var authController=require("../controllers/auth");

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render("login", { msg: "" });
});

router.post('/login', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
