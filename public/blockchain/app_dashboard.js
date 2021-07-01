//***********************Driving LIcence upload****************** */

$("#udl").submit((event) => {
  event.preventDefault();
  var fd = new FormData();
  var files = $("#fileudl")[0].files[0];
  console.log(files);
  fd.append("file", files);
  console.log(fd);
  fetch("/dashboard/uploaddl",{body:fd, method:"post"}).then((res)=>res.json())
  .then(async(res)=>{
    console.log(res);
    if(!res.done) throw new Error("Server DL Upload error");

    document.getElementById("udl_uploaded").innerHTML =
    "<span class='label label-success'>Uploaded</span>";

    setTimeout(function () {
        document.getElementById("udl_verified").innerHTML =
          "<span class='label label-success'>Verified</span>";
    }, 2000);

    await App.contract.methods.add_driving(res.hash,res.licenseno,res.validity.toString()).send({from:web3.givenProvider.selectedAddress});

    return fetch("/dashboard/confirmblockchainupload",{body:JSON.stringify({doc:'dl'}), method:'post', headers:{
      'Content-Type':'application/json'
    }});
  }).then((resp)=>resp.json())
  .then(async (resp)=>{
    if(!resp.done) throw new Error("Error: "+resp.error);
    document.getElementById("udl_blockchain").innerHTML ="<span class='label label-success'>Uploaded</span>";
  }).catch((err)=>{
    console.log("Something Went Wrong\nError: "+err);
    alert("Error: "+err);
  })
});

// //**********************RC upload****************** */

$("#urc").submit((event) => {
  event.preventDefault();
  var fd = new FormData();
  var files = $("#fileurc")[0].files[0];
  console.log(files);
  fd.append("file", files);
  console.log(fd);
  fetch("/dashboard/uploadrc",{body:fd, method:"post"}).then((res)=>res.json())
  .then(async(res)=>{
    console.log(res);
    if(!res.done) throw new Error("Server DL Upload error");

    document.getElementById("urc_uploaded").innerHTML =
    "<span class='label label-success'>Uploaded</span>";

    setTimeout(function () {
        document.getElementById("urc_verified").innerHTML =
          "<span class='label label-success'>Verified</span>";
    }, 2000);

    await App.contract.methods.add_rc( res.hash,
      res.rc_no,
      res.validity.toString(),
      res.regdate,
      res.chassis,
      res.engine,
      res.model,
      res.seat,).send({from:web3.givenProvider.selectedAddress});

    return fetch("/dashboard/confirmblockchainupload",{body:JSON.stringify({doc:'rc'}), method:'post', headers:{
      'Content-Type':'application/json'
    }});
  }).then((resp)=>resp.json())
  .then(async (resp)=>{
    if(!resp.done) throw new Error("Error: "+resp.error);
    document.getElementById("urc_blockchain").innerHTML ="<span class='label label-success'>Uploaded</span>";
  }).catch((err)=>{
    console.log("Something Went Wrong\nError: "+err);
    alert("Error: "+err);
  })
});



// //**********************is upload****************** */
$("#uis").submit((event) => {
  event.preventDefault();
  var fd = new FormData();
  var files = $("#fileuis")[0].files[0];
  console.log(files);
  fd.append("file", files);
  console.log(fd);
  fetch("/dashboard/uploadis",{body:fd, method:"post"}).then((res)=>res.json())
  .then(async(res)=>{
    console.log(res);
    if(!res.done) throw new Error("Server DL Upload error");

    document.getElementById("uis_uploaded").innerHTML =
    "<span class='label label-success'>Uploaded</span>";

    setTimeout(function () {
        document.getElementById("uis_verified").innerHTML =
          "<span class='label label-success'>Verified</span>";
    }, 2000);

    await App.contract.methods.add_insurance( res.hash,
      res.is_no,
      res.validity.toString(),).send({from:web3.givenProvider.selectedAddress});

    return fetch("/dashboard/confirmblockchainupload",{body:JSON.stringify({doc:'is'}), method:'post', headers:{
      'Content-Type':'application/json'
    }});
  }).then((resp)=>resp.json())
  .then(async (resp)=>{
    if(!resp.done) throw new Error("Error: "+resp.error);
    document.getElementById("uis_blockchain").innerHTML ="<span class='label label-success'>Uploaded</span>";
  }).catch((err)=>{
    console.log("Something Went Wrong\nError: "+err);
    alert("Error: "+err);
  })
});


// //**********************PO upload****************** */
$("#upo").submit((event) => {
  event.preventDefault();
  var fd = new FormData();
  var files = $("#fileupo")[0].files[0];
  console.log(files);
  fd.append("file", files);
  console.log(fd);
  fetch("/dashboard/uploadpo",{body:fd, method:"post"}).then((res)=>res.json())
  .then(async(res)=>{
    console.log(res);
    if(!res.done) throw new Error("Server DL Upload error");

    document.getElementById("upo_uploaded").innerHTML =
    "<span class='label label-success'>Uploaded</span>";

    setTimeout(function () {
        document.getElementById("upo_verified").innerHTML =
          "<span class='label label-success'>Verified</span>";
    }, 2000);

    await App.contract.methods.add_pollution(  res.hash,
      res.po_no,
      res.validity.toString(),).send({from:web3.givenProvider.selectedAddress});

    return fetch("/dashboard/confirmblockchainupload",{body:JSON.stringify({doc:'po'}), method:'post', headers:{
      'Content-Type':'application/json'
    }});
  }).then((resp)=>resp.json())
  .then(async (resp)=>{
    if(!resp.done) throw new Error("Error: "+resp.error);
    document.getElementById("upo_blockchain").innerHTML ="<span class='label label-success'>Uploaded</span>";
  }).catch((err)=>{
    console.log("Something Went Wrong\nError: "+err);
    alert("Error: "+err);
  })
});


//******************************QR Code Activation************************************ */
document.getElementById("activateqr").addEventListener("click",async (e)=>{
  try{
    await App.contract.methods.setverified().send({from:web3.givenProvider.selectedAddress});
    let isVerified=await App.contract.methods.verify().call({from:web3.givenProvider.selectedAddress});
    if(!isVerified) throw new Error("Not Verified/Activated");
    let response=await fetch("/qr/activate");
    let res=await response.json();
    if(!res.done) throw new Error("Server Error: "+res.error);
    document.getElementById("activationstatus").innerText="Activated";

  }catch(err){
    alert("Error: "+err);
  }
});  

