var express = require('express');
var router = express.Router();
var indexController=require("../controllers/index");
const { authenticate } = require('../midlewares/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/verify/user/:username/:qr",indexController.qrVerification);

router.get('/qr/activate', authenticate,indexController.qrActivation);



module.exports = router;
