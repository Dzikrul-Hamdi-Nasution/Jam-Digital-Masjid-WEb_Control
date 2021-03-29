var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dzikrulhamdinasution@gmail.com',
        pass: 'Master75wew'
    }
});

var mailOptions = {
    from: 'dzikrulhamdinasution@gmail.com',
    to: 'hamdiganteng91@gmail.com',
    subject: 'Uji coba kirim SMS',
    text: 'Assalamualaikum'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});