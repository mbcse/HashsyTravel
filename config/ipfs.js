const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI('ipfs.infura.io', 5001,{ protocol: 'https'});
const fs=require("fs");

module.exports={

    uploadfile:async(filename)=>{
        return new Promise((resolve,reject)=>{
            let ipfsfilen = fs.readFileSync("./public/doc_uploads/" +filename);
            console.log(ipfsfilen);
            let ipfsbuffer = new Buffer.from(ipfsfilen);
            console.log(ipfsbuffer);
            ipfs.files.add(ipfsbuffer, function (err, file) {
              if (err) {
                reject(err);
              }
              console.log(file);
              resolve(file[0].hash);
            });
        });
      
    },

    


}


