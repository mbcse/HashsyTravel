var authenticate = function (req, res, next) {
    console.log(req.session);
    if (req.session.loggedin) next();
    else res.render("login", { msg: "Please Log in First" });
};

module.exports={authenticate};