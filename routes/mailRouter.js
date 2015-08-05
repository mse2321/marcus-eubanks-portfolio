// Load module dependencies
var express = require('express');
var nodemailer = require('nodemailer');
// Creatre Mail router
var MailRouter = express.Router();
// Defining the POST verb / route
MailRouter.post('/', function (req, res) {
    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mse233@gmail.com',
            pass: 'G9137@_g1majk'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.name + ' ' + req.body.email, // sender address
        to: 'mse233@gmail.com', // list of receivers
        subject: req.body.subject || '', // Subject line
        text: req.body.message//, // plaintext body
        //html: '<b>Hello world ✔</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });

    res.status(200).json(req.body);
});
// Exporting the module to be re-used
module.exports = MailRouter;