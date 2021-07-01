
//Register Code
$("#regform").submit((event) => {
  event.preventDefault();
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };

  var data = $("#regform").serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  console.log(data);

  fetch("/auth/signup",{body:JSON.stringify(data), headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, method:"post"})
  .then((res)=>res.json())
  .then(async (res)=>{
    if(!res.done) throw new Error(JSON.stringify(res.error));

    await App.contract.methods.registeruser(res.data.fname+res.data.lname,res.data.dob)
    .send({from:web3.givenProvider.selectedAddress});
    
    let bid=await App.contract.methods.getid().call({from:web3.givenProvider.selectedAddress});
    bid=bid;
    console.log(bid);
   return  fetch("/auth/insertbid",{body:JSON.stringify({id:res.data.id,bid:bid}),headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    }, method:"post"});

  }).then((response)=>{
    return response.json();
  }).then((res)=>{
    console.log(res);
    if(!res.done)throw new Error(res.error);
    alert("REGISTRATION SUCCESSFUL");
    window.location.href="/auth/login";
  }).catch((err)=>{
    alert("Error : "+err);
  })

  // $.ajax({
  //   type: "POST",
  //   url: "/auth/register",
  //   data: rdata,
  //   dataType: "json",
  //   success: function (response) {
  //     console.log(response.data);
  //     if (response.data == "ok") {
  //       var obj = JSON.parse(dataobj);
  //       var name = obj.fname + obj.lname;
  //       contract.registeruser(name, obj.dob, (err, hash) => {
  //         console.log(hash);

  //         contract.getid((er, resu) => {
  //           console.log(resu.toNumber());

  //           $.ajax({
  //             type: "POST",
  //             url: "/insertid",
  //             data: { username: obj.username, id: resu.toNumber() + 1 },
  //             dataType: "json",
  //             success: function (r) {
  //               if (r.done == "ok") {
  //                 window.location.href = "/";
  //               } else {
  //                 console.log("NOT Done");
  //               }
  //             },
  //           });
  //         });
  //       });
  //     } else {
  //       console.log("No data");
  //     }
  //   },
  // });
});
