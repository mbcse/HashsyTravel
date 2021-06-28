var authenticate = function (req, res, next) {
    if (req.session.loggedin) next();
    else res.render("login", { msg: "Please Log in First" });
};

module.exports={authenticate};