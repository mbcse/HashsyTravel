const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI("localhost", "5001", { protocol: "http" });

module.exports={

    uploadfile:async(filename)=>{
        return new Promise((resolve,reject)=>{
            let ipfsfilen = fs.readFileSync("../public/doc_uploads/" +filename);

            let ipfsbuffer = new Buffer.from(ipfsfilen);
            var hash = "";
            ipfs.files.add(ipfsbuffer, function (err, file) {
              if (err) {
                reject(err);
              }
              resolve(file[0].hash);
            });
        });
      
    },

    


}


