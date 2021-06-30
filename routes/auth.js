var express = require('express');
var router = express.Router();
var authController=require("../controllers/auth");

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render("login", { msg: "" });
});

router.post('/login',authController.login);

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", authController.register);
router.post("/insertbid", authController.insertBid);

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
