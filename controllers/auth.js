const database=require("../config/database");

module.exports={


login:(req, res) => {
        var username = req.body.username;
        var password = req.body.password;
      
        if (username && password) {
          con.query(
            "select * from users where username=? and password=?",
            [username, password],
            (err, result) => {
              if (result.length > 0) {
                console.log(result);
                req.session.loggedin = true;
                req.session.user = username;
                req.session.bid = result[0].bid;
                res.redirect("/dashboard");
              } else {
                res.render("login", { msg: "Wrong Username or Password" });
              }
            }
          );
        } else {
          res.render("login", { msg: "Please Enter Username and Password" });
        }
      }













}