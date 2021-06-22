if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545/decentra")
  );
}
console.log("");
web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log("This is mainnet");
      break;
    case "2":
      console.log("This is the deprecated Morden test network.");
      break;
    case "3":
      console.log("This is the ropsten test network.");
      break;
    case "4":
      console.log("This is the Rinkeby test network.");
      break;
    case "42":
      console.log("This is the Kovan test network.");
      break;
    default:
      console.log("This is an unknown network.");
  }
});

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log("Account Connected Address :  " + web3.eth.defaultAccount);

var testContract = web3.eth.contract(abi);
var contract = testContract.at(contractAddress);

contract.testcontract((err, result) => {
  console.log(result);
});

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

  var rdata = $("#regform").serializeArray();
  console.log(rdata);
  var dataobj = JSON.stringify($("#regform").serializeObject());

  $.ajax({
    type: "POST",
    url: "/registeruser",
    data: rdata,
    dataType: "json",
    success: function (response) {
      console.log(response.data);
      if (response.data == "ok") {
        var obj = JSON.parse(dataobj);
        var name = obj.fname + obj.lname;
        contract.registeruser(name, obj.dob, (err, hash) => {
          console.log(hash);

          contract.getid((er, resu) => {
            console.log(resu.toNumber());

            $.ajax({
              type: "POST",
              url: "/insertid",
              data: { username: obj.username, id: resu.toNumber() + 1 },
              dataType: "json",
              success: function (r) {
                if (r.done == "ok") {
                  window.location.href = "/";
                } else {
                  console.log("NOT Done");
                }
              },
            });
          });
        });
      } else {
        console.log("No data");
      }
    },
  });
});
