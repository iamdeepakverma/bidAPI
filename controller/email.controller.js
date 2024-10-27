import nodemailer from 'nodemailer'; 

function sendMailAPI(email,password)  
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deepuverma124124@gmail.com',
    pass: 'bchwkylwlspwhkwd'
  }
});

var mailOptions = {
  from: 'deepuverma124124@gmail.com',
  to: email,
  subject: 'Verification mail BID me',
  html: "<h1>Welcome to MyApp</h1><p>you have successfully register to our app , your login credentials are attached below</p><h2>Email : "+email+"</h2><h2>Password = "+password+":<h1>Click the link to verify</h1>http://localhost:3000/verifyuser"+email};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMailAPI;