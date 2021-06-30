const database=require("../config/database");


module.exports={

qrActivation:async(req,res)=>{
    let user=await database.searchByValue({
        table:'users',
        searchAttribute: 'id',
        searchValue: req.session.userid,
        attributes: ['*'],});
    
    user=user.data[0];
    let options={
        table:'users',
        records:[
          {
            id:req.session.userid,
            qractivated:true
          }
        ]
    }

    let results=await database.update(options);
    console.log(results);
    res.json({done:true});
    
},

qrVerification:async(req,res)=>{
    try{
    let user=await database.searchByValue({
        table:'users',
        searchAttribute: 'username',
        searchValue: req.params.username,
        attributes: ['*'],});
    
    if(user.data.length==0) throw new Error("User Doesn't Exist or validty Expired Or Unverified User");
    res.render("pages-profile", { bid: req.params.qr, user: user.data[0] });
    }catch(err){
        res.send(
            "<h1 style='align-self: center;'> <br>"+err+" HashSyTravel</h1>"
          );
    }

}

}