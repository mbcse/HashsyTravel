var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    socketTimeout: 5000,
    logger: true,
    auth: {
      user: "mbchampyou@gmail.com",
      pass: "jvqpvvhevgcregmj",
    },
  });


function sendMail(from, tooo, subj, mssg) {
  var fromemail = from;
  var sub = subj;
  var msg = mssg;
  var too = tooo;
  var mail = {
    from: fromemail,
    to: too,
    subject: sub,
    text: msg,
  };

transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports={sendMail};