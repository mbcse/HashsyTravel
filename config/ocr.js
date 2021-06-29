var spawn = require("child_process").spawn;
var pythonscript={
    pythonBase:"../public/python/",
    docUploadBase:"../public/doc_uploads/",
    dl:pythonscript.pythonBase+"dl_ocr.py",
    rc:pythonscript.pythonBase+"rc_ocr.py",
    po:pythonscript.pythonBase+"po_ocr.py",
    is:pythonscript.pythonBase+"is_ocr.py",

};


module.exports={
   
    getOcrData:async(filename,type)=>{
        return new Promise((resolve,reject)=>{
            var process = spawn("python", [
                pythonscript[type],
                pythonscript.docUploadBase + filename,
            ]);

            process.stdout.on("data", function (data) {
                var obj = JSON.parse(data.toString());
                resolve(obj);
            });    

            process.stdout.on("error",function(err){
                reject(err);
            });
        });
    }

}




  