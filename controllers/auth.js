const database=require("../config/database");

module.exports={


login: async (req, res) => {
          try {
            if (!req.body.username || !req.body.password) throw new Error("Please imput Required Fields");
            const options = {
              // schema is not passed here since it has been passed while creating client
              table: 'users',
              searchAttribute: "username",
              searchValue: req.body.username,
              attributes: ['*'],
            };
            const result = await database.searchByValue(options);
            console.log(result);
            if(result.data.length==0 || result.data[0].password!=req.body.password) throw new Error("Wrong Username or Password");
            req.session.loggedin = true;
            req.session.user = req.body.username;
            req.session.bid = result.data[0].id;
            res.redirect("/dashboard");
          } catch(err) {
            res.render("login", { msg: err });
          }
           
},

register:async (req, res) => {

  const options = {
    // schema is not passed here since it has been passed while creating client
    table: 'users',
    records: [
      {
        username: req.body.username,
        password: req.body.password,
        fname: req.body.fname,
        lname : req.body.lname,
        dob : req.body.dob,
        addhar : req.body.addhar,
        email : req.body.email,
        phone : req.body.phone,

      }
    ]
  };
 

  try {
    const result = await database.insert(options);
    var response = JSON.parse('{"data":"nok"}');
    res.json(response);
  } catch(err) {
    res.json(err);
  }
}














}