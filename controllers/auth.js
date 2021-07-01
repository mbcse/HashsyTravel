const database=require("../config/database");

module.exports={


login: async (req, res) => {
          try {
            if (!req.body.username || !req.body.password) throw new Error("Please input Required Fields");
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
            req.session.bid = result.data[0].bid;
            req.session.userid=result.data[0].id;
            res.redirect("/dashboard");
          } catch(err) {
            console.log(err.message);
            res.render("login", { msg: err.message });
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
    const users=await database.searchByValue(
    {table:'users',searchAttribute: "username",
    searchValue: req.body.username,
    attributes: ['id']
    });
    if(users.data.length>0) throw new Error("Username Already Exists");
    const result = await database.insert(options);
    console.log(result);
    let data=options.records[0];
    data['id']=result.data.inserted_hashes[0];
    res.json({done: true,data:data});
  } catch(err) {
    console.log(err);
    res.json({done:false,error:err.message});
  }
},


insertBid: async(req,res)=>{
  const options = {
    // schema is not passed here since it has been passed while creating client
    table: 'users',
    records: [
      {
       id:req.body.id,
       bid:req.body.bid
      }
    ]
  };

  try {
    console.log(options);
    const result = await database.update(options);
    console.log(result);
    res.json({done:true});
  } catch(err) {
    res.json({done:false,error:err.message});
  }
  

}














}