
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
    url: "/auth/register",
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
