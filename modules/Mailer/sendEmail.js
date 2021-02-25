const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
        user: 'contact@adamblicharz.com',
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendEmail = (mail, nick, txt) => {
  return new Promise((resolve, reject) => {
      transporter.sendMail({
        from: 'contact@adamblicharz.com',
        to: 'contact@adamblicharz.com',
        subject: `Wiadomość od - ${nick}`,
        text: `Podany adres email: ${mail}
              Tekst: ${txt}`
        }, function(error, info){
          if (error) {
            reject(error);
          }
          else resolve(true);
      });
  });
}

module.exports = sendEmail;