
const nodemailer = require('nodemailer');

const emailUser = 'enquiry@rainbow-bouquets.com';
const emailPass = 'Exit.1963!';

export function SendEmail(data) {
  const transporter = nodemailer.createTransport({
    host: 'mail.rainbow-bouquets.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  const mainOptions = {
    from: `"${data.title}" ${emailUser}`,
    to: "info@smartsmiledentalclinics.co.ke",
    subject: data.subject,
    text: data.content
  };
  //  console.log('html data ======================>', mainOptions)
   transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

};
