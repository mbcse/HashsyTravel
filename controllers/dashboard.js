const database=require("../config/database");

module.exports={

dashboard: async (req, res) => {
    const options = {
        // schema is not passed here since it has been passed while creating client
        table: 'users',
        searchAttribute: "username",
        searchValue: 'simon_j',
        attributes: ['*'],
    };
    con.query(
      "select * from status where username=?",
      [req.session.user],
      (err, result) => {
        if (err) throw err;
        var obj = result[0];
        res.render("dashboard", {
          obj: obj,
          user: req.session.user,
          bid: req.session.bid,
        });
      }
    );
  }



}