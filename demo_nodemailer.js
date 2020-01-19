var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: 'email@gmail.com',
    to: 'recipient@gmail.com', 
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }

});