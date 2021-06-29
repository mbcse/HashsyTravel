const database=require("../config/database");
const ipfs=require("../config/ipfs");
const ocr=require("../config/ocr");
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
      res.render("dashboard", {
        userdata: user.data[0],
        user: req.session.user, 
        bid: req.session.bid,
      });

    } catch(err) {
      console.log(err);
      res.send("Internal Error");
    }
},

uploaddl: async(req,res)=>{
  try{
    console.log(req.file);
    let hash=await ipfs.uploadfile(req.file.filename);
    let data=await ocr.extractIsData(req.file.filename,"dl");
    console.log(hash);
    console.log(data);
    res.json({done:true});
  }catch(err){
    console.log(err);
    res.json({done:false});
  }

}



}