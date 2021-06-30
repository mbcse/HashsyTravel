const ocrSpace = require('ocr-space-api-wrapper');
const apiKey='44b7af864188957';


module.exports={
   
    extractDlData:async(filename)=>{
        return new Promise(async (resolve,reject)=>{
            try {
             
                // Using your personal token + local file
                const res2 = await ocrSpace("./public/doc_uploads/"+ filename, { apiKey: apiKey });
                console.log(res2);
                let data=res2.ParsedResults[0].ParsedText;
                //DRIVING LICENSE
                // Transport Department
                // Name: Mohit Bhat
                // LicenceNo: DL-0420110146946
                // DOB: 02/06/2000
                // Address: XYZ Road, Delhi
                // IssueDate: 01/03/2020
                // Validity: 10/10/2050
                data=data.split("\r\n");
                let dataobj={};
                for(var i=2;i<data.length-1;i++){
                    let line=data[i].split(":");
                    console.log(line);
                    dataobj[line[0].trim()]=line[1].trim();
                }
                resolve(dataobj);
              } catch (error) {
                reject(error);
              }
        });
    },

    extractRcData:async(filename)=>{
        return new Promise(async (resolve,reject)=>{
            try {
             
                // Using your personal token + local file
                const res2 = await ocrSpace("./public/doc_uploads/"+ filename, { apiKey: apiKey });
                let data=res2.ParsedResults[0].ParsedText;
                console.log(data);
                // VECHICLE REGISTRATION CERTIFICATE
                // Name: Mohit Bhat
                // RegNo: DL01J88444
                // DOB: 02/06/2000
                // Address: XYZ Road, Delhi
                // RegDate: 01/03/2019
                // Validity: 10/10/2029
                // Transport Department
                // ChassisNo: 600687B
                // EngineNo: 66785CG
                // Vechicle Class: MCYCLE
                // Maker: Royal
                // Model: ENFIELD BULLET
                // Seating Capacity: 2
                data=data.split("\r\n");
                let dataobj={};
                for(var i=1;i<data.length-1;i++){
                    if(i==7) continue;
                    let line=data[i].split(":");
                    console.log(line);
                    dataobj[line[0].trim()]=line[1].trim();
                }
                resolve(dataobj);
              } catch (error) {
                reject(error);
              }
        });
    },

    extractPoData:async(filename)=>{
        return new Promise(async (resolve,reject)=>{
            try {
             
                // Using your personal token + local file
                const res2 = await ocrSpace("./public/doc_uploads/"+ filename, { apiKey: apiKey });
                let data=res2.ParsedResults[0].ParsedText;
                console.log(data);
                // Transport Department
                // Pollution Certificate
                // POLLUTION CERTIFICATE DETAILS
                // Certificate No: KAB5678
                // License No: DC-0420110146946
                // Vehicle No: DL01J-88444
                // Name: Mohit Bhat
                // Reg Date: 10/04/2018
                // Issue Date: 19/03/2020
                // Validity: 19/09/2026
                // Fuel: Petrol
                // Vehicle Type: 2 Wheeler
                // Maker: ROYAL
                // Model: ENFIELD BULLET
                // Engine No: 600689B
                // Transport Department
                // ABC
                data=data.split("\r\n");
                let dataobj={};
                for(var i=3;i<data.length-3;i++){
                    let line=data[i].split(":");
                    console.log(line);
                    dataobj[line[0].trim()]=line[1].trim();
                }
                resolve(dataobj);
              } catch (error) {
                reject(error);
              }
        });
    },

    extractIsData:async(filename)=>{
        return new Promise(async (resolve,reject)=>{
            try {
             
                // Using your personal token + local file
                const res2 = await ocrSpace("./public/doc_uploads/"+ filename, { apiKey: apiKey });
                let data=res2.ParsedResults[0].ParsedText;
                console.log(data);
            //    General
            //     Insurance
            //     Dear Mohit,
            //     Congrats for Motor Insurance
            //     MOTOR INSURANCE DETAILS
            //     PolicyNo: 3005/201 1379796/1 1/000015054
            //     Branch Address: ABC ROAD, DELHI
            //     Insured Name: Mohit Bhat
            //     Insured Address: xyz ROAD, DELHI
            //     Tenure: 5 Years
            //     Issue Date: 19/03/2020
            //     Validity: 18/03/2029
            //     Premium Amount: 6714
            //     Total Value: 57064
            //     Vehicle Class: MCYCLE
            //     Maker: ROYAL
            //     Model: ENFIELD BULLET
            //     Engine: 66785CG
            //     Sincerely,
            //     XYZ
            //     General Motor Insurance
            //     WWW.GENERAL.COM
            //     HELLOGENERALCOM 
                data=data.split("\r\n");
                let dataobj={};
                for(var i=5;i<data.length-6;i++){
                    let line=data[i].split(":");
                    console.log(line);
                    dataobj[line[0].trim()]=line[1].trim();
                }
                resolve(dataobj);
              } catch (error) {
                reject(error);
              }
        });
    },

}




  