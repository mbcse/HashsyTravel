const database=require("../config/database");

module.exports={

dashboard: async (req, res) => {
    const options = {
        // schema is not passed here since it has been passed while creating client
        table: 'users',
        searchAttribute: "username",
        searchValue: req.session.user,
        attributes: ['*'],
    };
    try {
      const user = await database.searchByValue(options);
      console.log(user);
      res.render("dashboard", {
        userdata: user.data[0],
        user: req.session.user, 
        bid: req.session.bid,
      });

    } catch(err) {
      console.log(err);
      res.send("Internal Error");
    }
  }



}