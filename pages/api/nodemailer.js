import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function main(to, subject, text, mail) {
  console.log(to, subject, text, mail);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "premium177.web-hosting.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 465, // port for secure SMTP
    auth: {
      user: process.env.MAIL_EMAIL, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: `"Paathshaala" <${process.env.MAIL_EMAIL}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: `<p>${text}</p><br><div><b>Name : </b><a href=${
        "http://lochost:3000/respondback?doubtid=" +
        mail?.doubtid +
        "?mail=" +
        mail?.emailid +
        "?phone=" +
        mail?.phone
      }></a></div><div><b>email : </b>${
        mail?.Email
      }</div><div><b>Message : </b>${mail?.Message}</div>`, // html body
    })
    .catch((err) => console.log(err));
}
//site.com/respondback?doubtid=mail.doubtid
https: module.exports = main;
