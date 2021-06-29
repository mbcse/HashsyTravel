//***********************Driving LIcence upload****************** */

$("#udl").submit((event) => {
  event.preventDefault();
  console.log("Working Dashboard js");
  var fd = new FormData();
  var files = $("#fileudl")[0].files[0];
  console.log(files);
  fd.append("file", files);
  console.log(fd);
  fetch("/dashboard/uploaddl",{body:fd, method:"post"}).then((res)=>res.json())
  .then((res)=>{
    if(!res.done) throw new Error("Server DL Upload error");
    document.getElementById("udl_uploaded").innerHTML =
    "<span class='label label-success'>Uploaded</span>";
    setTimeout(function () {
        document.getElementById("udl_verified").innerHTML =
          "<span class='label label-success'>Verified</span>";
    }, 2000);
    
  }).catch((err)=>{
    console.log("Something Went Wrong\nError: "+err);
  })
});
//   $.ajax({
//     url: "/uploaddl",
//     type: "post",
//     data: fd,
//     contentType: false,
//     processData: false,
//     datatype: "json",
//     success: function (response) {
//       if (response.done == "ok") {
//         document.getElementById("udl_uploaded").innerHTML =
//           "<span class='label label-success'>Uploaded</span>";
//         setTimeout(function () {
//           document.getElementById("udl_verified").innerHTML =
//             "<span class='label label-success'>Verified</span>";
//         }, 2000);
//         console.log(response);

//         contract.add_driving(
//           response.hash,
//           response.license_no,
//           response.validity.toString(),
//           (err, result) => {
//             console.log("done");
//             var ev = contract.dladded();
//             ev.watch((err, resu) => {
//               if (!err) {
//                 if (resu.args.r) {
//                   var xhttp = new XMLHttpRequest();
//                   xhttp.open("POST", "/confirmdocs", true);
//                   xhttp.setRequestHeader(
//                     "Content-type",
//                     "application/x-www-form-urlencoded"
//                   );
//                   xhttp.send("db=dl&validity=" + response.validity);
//                   xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                       if (this.responseText) {
//                         document.getElementById("udl_blockchain").innerHTML =
//                           "<span class='label label-success'>Uploaded</span>";
//                         setTimeout(function () {
//                           document.getElementById("udl_validity").innerHTML =
//                             response.validity;
//                         }, 2000);
//                       } else {
//                         alert("error");
//                       }
//                     }
//                   };
//                 }
//               }
//             });
//           }
//         );
//       } else {
//         alert("file not uploaded");
//       }
//     },
//   });
// });

// //**********************RC upload****************** */

// $("#urc").submit((event) => {
//   event.preventDefault();

//   var fd = new FormData();
//   var files = $("#fileurc")[0].files[0];
//   fd.append("file", files);

//   $.ajax({
//     url: "/uploadrc",
//     type: "post",
//     data: fd,
//     contentType: false,
//     processData: false,
//     datatype: "json",
//     success: function (response) {
//       if (response.done == "ok") {
//         document.getElementById("urc_uploaded").innerHTML =
//           "<span class='label label-success'>Uploaded</span>";
//         setTimeout(function () {
//           document.getElementById("urc_verified").innerHTML =
//             "<span class='label label-success'>Verified</span>";
//         }, 2000);
//         console.log(response);

//         contract.add_rc(
//           response.hash,
//           response.rc_no,
//           response.validity.toString(),
//           response.regdate,
//           response.chassis,
//           response.engine,
//           response.model,
//           response.seat,
//           (err, result) => {
//             console.log("done");

//             var ev = contract.rcadded();
//             ev.watch((err, resu) => {
//               if (!err) {
//                 if (resu.args.r) {
//                   var xhttp = new XMLHttpRequest();
//                   xhttp.open("POST", "/confirmdocs", true);
//                   xhttp.setRequestHeader(
//                     "Content-type",
//                     "application/x-www-form-urlencoded"
//                   );
//                   xhttp.send("db=rc&validity=" + response.validity);

//                   xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                       if (this.responseText) {
//                         console.log(this.responseText);
//                         document.getElementById("urc_blockchain").innerHTML =
//                           "<span class='label label-success'>Uploaded</span>";
//                         setTimeout(function () {
//                           document.getElementById("urc_validity").innerHTML =
//                             response.validity;
//                         }, 2000);
//                       } else {
//                         alert("error");
//                       }
//                     }
//                   };
//                 }
//               }
//             });
//           }
//         );
//       } else {
//         alert("file not uploaded");
//       }
//     },
//   });
// });

// //**********************is upload****************** */

// $("#uis").submit((event) => {
//   event.preventDefault();

//   var fd = new FormData();
//   var files = $("#fileuis")[0].files[0];
//   fd.append("file", files);

//   $.ajax({
//     url: "/uploadis",
//     type: "post",
//     data: fd,
//     contentType: false,
//     processData: false,
//     datatype: "json",
//     success: function (response) {
//       if (response.done == "ok") {
//         document.getElementById("uis_uploaded").innerHTML =
//           "<span class='label label-success'>Uploaded</span>";
//         setTimeout(function () {
//           document.getElementById("uis_verified").innerHTML =
//             "<span class='label label-success'>Verified</span>";
//         }, 2000);
//         console.log(response);

//         contract.add_insurance(
//           response.hash,
//           response.is_no,
//           response.validity.toString(),
//           (err, result) => {
//             console.log("done");

//             var ev = contract.isadded();
//             ev.watch((err, resu) => {
//               if (!err) {
//                 if (resu.args.r) {
//                   var xhttp = new XMLHttpRequest();
//                   xhttp.open("POST", "/confirmdocs", true);
//                   xhttp.setRequestHeader(
//                     "Content-type",
//                     "application/x-www-form-urlencoded"
//                   );
//                   xhttp.send("db=is&validity=" + response.validity);
//                   xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                       if (this.responseText) {
//                         document.getElementById("uis_blockchain").innerHTML =
//                           "<span class='label label-success'>Uploaded</span>";
//                         setTimeout(function () {
//                           document.getElementById("uis_validity").innerHTML =
//                             response.validity;
//                         }, 2000);
//                       } else {
//                         alert("error");
//                       }
//                     }
//                   };
//                 }
//               }
//             });
//           }
//         );
//       } else {
//         alert("file not uploaded");
//       }
//     },
//   });
// });

// //**********************PO upload****************** */

// $("#upo").submit((event) => {
//   event.preventDefault();

//   var fd = new FormData();
//   var files = $("#fileupo")[0].files[0];
//   fd.append("file", files);

//   $.ajax({
//     url: "/uploadpo",
//     type: "post",
//     data: fd,
//     contentType: false,
//     processData: false,
//     datatype: "json",
//     success: function (response) {
//       if (response.done == "ok") {
//         document.getElementById("upo_uploaded").innerHTML =
//           "<span class='label label-success'>Uploaded</span>";
//         setTimeout(function () {
//           document.getElementById("upo_verified").innerHTML =
//             "<span class='label label-success'>Verified</span>";
//         }, 2000);
//         console.log(response);

//         contract.add_pollution(
//           response.hash,
//           response.po_no,
//           response.validity.toString(),
//           (err, result) => {
//             console.log("done");
//             var ev = contract.poadded();
//             ev.watch((err, resu) => {
//               if (!err) {
//                 if (resu.args.r) {
//                   var xhttp = new XMLHttpRequest();
//                   xhttp.open("POST", "/confirmdocs", true);
//                   xhttp.setRequestHeader(
//                     "Content-type",
//                     "application/x-www-form-urlencoded"
//                   );
//                   xhttp.send("db=po&validity=" + response.validity);
//                   xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                       if (this.responseText) {
//                         document.getElementById("upo_blockchain").innerHTML =
//                           "<span class='label label-success'>Uploaded</span>";
//                         setTimeout(function () {
//                           document.getElementById("upo_validity").innerHTML =
//                             response.validity;
//                         }, 2000);
//                       } else {
//                         alert("error");
//                       }
//                     }
//                   };
//                 }
//               }
//             });
//           }
//         );
//       } else {
//         alert("file not uploaded");
//       }
//     },
//   });
// });
