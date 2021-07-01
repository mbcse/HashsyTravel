const database=require("../config/database");

function validValidity(date){
    console.log(date);
    let datearr=date.split("/");
    date=datearr[1]+"/"+datearr[0]+"/"+datearr[2];
    let validTill = new Date(date);
    let curr = new Date();
    console.log(validTill);
    console.log(curr);
    return curr < validTill?true:false;
}
new Date()

function DocVerification(user){
    console.log("checking");
    if(!user.dl.blockchainstatus || !user.dl.uploadstatus || !user.dl.verifiedstatus || !validValidity(user.dl.Validity))   
        return "Driving License Document Verification Failed Due to one or more reasons!";
    if(!user.po.blockchainstatus || !user.po.uploadstatus || !user.po.verifiedstatus || !validValidity(user.po.Validity))
        return "Polution Certificate Verification Failed Due to one or more reasons!";        
    if(!user.is.blockchainstatus || !user.is.uploadstatus || !user.is.verifiedstatus || !validValidity(user.is.Validity))
        return "Insurance Document Verification Failed Due to one or more reasons!";
    if(!user.rc.blockchainstatus || !user.rc.uploadstatus || !user.rc.verifiedstatus || !validValidity(user.rc.Validity))
        return "Vechicle Registration Certificate Verification Failed Due to one or more reasons!";
    
    return false;    
}

module.exports={

qrActivation:async(req,res)=>{
    let user=await database.searchByValue({
        table:'users',
        searchAttribute: 'id',
        searchValue: req.session.userid,
        attributes: ['*'],});
    
    user=user.data[0];
    try{
        
       let isvalidDoc=DocVerification(user);
       console.log(isvalidDoc);
       if(isvalidDoc) throw new Error(isvalidDoc);  

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
    } catch(err){
        res.json({done:false,error:err.message});
        try {
            if(user.qractivated){
                let options={
                    table:'users',
                    records:[
                    {
                        id:user.id,
                        qractivated:false
                    }
                    ]
                }
                let results=await database.update(options);
                console.log(results);
            } 
        } catch (error) {
            console.log(error);
        }
       
    }
    
},

qrVerification:async(req,res)=>{
    var users=await database.searchByValue({
        table:'users',
        searchAttribute: 'username',
        searchValue: req.params.username,
        attributes: ['*'],});
    try{
        if(users.data.length==0) throw new Error("User Doesn't Exist or validty Expired Or Unverified User");
        let user=users.data[0];
        if(user.bid!=req.params.qr) throw new Error("Username/Blockchain Id Mismatch");
        if(!user.qractivated) throw new Error("User QR/Profile Not Active");

        let isvalidDoc=DocVerification(user);
        if(isvalidDoc) throw new Error(isvalidDoc);  
        
        delete user.password;
        res.render("pages-profile", { bid: req.params.qr, user: user });
    } catch(err){
        res.send(
            "<h1 style='align-self: center;'> <br>"+err.message+" HashSyTravel</h1>"
        );

        try {
            if(users.data[0].qractivated){
           
                let options={
                    table:'users',
                    records:[
                    {
                        id:users.data[0].id,
                        qractivated:false
                    }
                    ]
                }
                let results=await database.update(options);
                console.log(results);
            } 
        } catch (error) {
            console.log(error);
        }
        

    }

}

}