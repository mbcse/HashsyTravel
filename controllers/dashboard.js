const database=require("../config/database");
const ipfs=require("../config/ipfs");
const ocr=require("../config/ocr");

function unixtime(s) {
  s = s.split("/").reverse().join("/");
  var t = s + " 00:00:00";
  console.log(s);
  return new Date(s).getTime() / 1000;
}


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
        bid: req.session.bid,//Blockchain ID
      });

    } catch(err) {
      console.log(err);
      res.send("Internal Error");
    }
},

uploaddl: async(req,res)=>{
  try{
    let hash=await ipfs.uploadfile(req.file.filename);
    let data=await ocr.extractDlData(req.file.filename);
    data['uploadstatus']=true;
    data['verifiedstatus']=true;
    data['blockchainstatus']=false;
    data['ipfshash']=hash;
    console.log(typeof(data));
    console.log(data);
    let options={
      table:'users',
      records:[
        {
          id:req.session.userid,
          dl:data
        }
      ]
    }
    console.log(options);
    let results=await database.update(options);
    console.log(results);
    res.json({
      done: true,
      licenseno: data.LicenceNo,
      name: data.Name,
      dob: data.DOB,
      issuedate: data.IssueDate,
      validity: unixtime(data.Validity),
      hash: hash,
    });
  }catch(err){
    console.log(err);
    res.json({done:false, error:err});
  }

},

uploadrc: async(req,res)=>{
  try{
    let hash=await ipfs.uploadfile(req.file.filename);
    let data=await ocr.extractRcData(req.file.filename);
    data['uploadstatus']=true;
    data['verifiedstatus']=true;
    data['blockchainstatus']=false;
    data['ipfshash']=hash;
    console.log(typeof(data));
    console.log(data);
    let options={
      table:'users',
      records:[
        {
          id:req.session.userid,
          rc:data
        }
      ]
    }
    console.log(options);
    let results=await database.update(options);
    console.log(results);
    res.json({
      done: true,
      rc_no: data.RegNo,
      validity: unixtime(data.Validity),
      hash: hash,
      engine: data.EngineNo,
      chassis: data.ChassisNo,
      model: data.Model,
      regdate: data.RegDate,
      seat: data['Seating Capacity'],
    });
  }catch(err){
    console.log(err);
    res.json({done:false, error:err});
  }

},

uploadis: async(req,res)=>{
  try{
    let hash=await ipfs.uploadfile(req.file.filename);
    let data=await ocr.extractIsData(req.file.filename);
    data['uploadstatus']=true;
    data['verifiedstatus']=true;
    data['blockchainstatus']=false;
    data['ipfshash']=hash;
    console.log(typeof(data));
    console.log(data);
    let options={
      table:'users',
      records:[
        {
          id:req.session.userid,
          is:data
        }
      ]
    }
    console.log(options);
    let results=await database.update(options);
    console.log(results);
    res.json({
      done: true,
      is_no: data.PolicyNo,
      validity: unixtime(data.Validity),
      hash: hash,
    });
  }catch(err){
    console.log(err);
    res.json({done:false, error:err});
  }

},

uploadpo: async(req,res)=>{
  try{
    let hash=await ipfs.uploadfile(req.file.filename);
    let data=await ocr.extractPoData(req.file.filename);
    data['uploadstatus']=true;
    data['verifiedstatus']=true;
    data['blockchainstatus']=false;
    data['ipfshash']=hash;
    console.log(typeof(data));
    console.log(data);
    let options={
      table:'users',
      records:[
        {
          id:req.session.userid,
          po:data
        }
      ]
    }
    console.log(options);
    let results=await database.update(options);
    console.log(results);
    res.json({
      done: true,
      po_no: data["Certificate No"],
      validity: unixtime(data.Validity),
      hash: hash,
    });
  }catch(err){
    console.log(err);
    res.json({done:false, error:err});
  }

},

confirmUploadToBlockchain:async(req,res)=>{
  let doc=req.body.doc;
  try{
    let user=await database.searchByValue({
      table:'users',
      searchAttribute: 'id',
      searchValue: req.session.userid,
      attributes: ['*'],});

    let options={
      table:'users',
      records:[
        {
          id:req.session.userid,
        }
      ]
    }
    switch(doc){
      case 'dl':options.records[0]['dl']=user.data[0].dl;
      options.records[0]['dl']['blockchainstatus']=true; break;
      case 'rc':options.records[0]['rc']=user.data[0].rc;
        options.records[0]['rc']['blockchainstatus']=true; break;
      case 'po':options.records[0]['po']=user.data[0].po;
        options.records[0]['po']['blockchainstatus']=true; break;
      case 'is':options.records[0]['is']=user.data[0].is;
        options.records[0]['is']['blockchainstatus']=true; break;
      default: throw new Error("Wrong Doc Type");
    }
    console.log(options);
    let results=await database.update(options);
    console.log(results);
    res.json({done:true});
  }catch(err){
    res.json({done:false, error:err.message});
  }
}



}