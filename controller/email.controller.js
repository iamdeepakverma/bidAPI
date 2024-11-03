import nodemailer from 'nodemailer'; 

function sendMailAPI( email,verificationLink)  
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deepakvermadutech@gmail.com',
    pass: 'iqtpztuygjesrrlu'
  }
});

var mailOptions = {
  from: 'deepakvermadutech@gmail.com',
  to: email,
  subject: 'Verification mail BID me',
  html: `<h1>Welcome to MyApp</h1>
  <p>You have successfully registered to our app. Your login credentials are below:</p>
 
  <h3>Click the link to verify your email: ${verificationLink}</h3>`
};
// console.log(mailOptions)
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMailAPI;