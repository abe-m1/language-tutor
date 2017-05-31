var express = require('express')
const nodeMailer = require('nodemailer')
var logger = require('morgan');
var bodyParser = require('body-parser');
const dev = require('./dev.js')
const cors = require('cors')
var app = express();


const port = process.env.PORT || 3000

 app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

app.use(cors())

app.use(express.static('app'));

app.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/test', function (req, res, next) {
    res.send({ message: 'thank you for visiting app'})
});

app.post('/mail', function (req, res, next) {
    console.log(req.body)
    //   res.send('hello nono');
    // console.log('this is mail')
//     const email = {
//     transporter: nodeMailer.createTransport(dev.smtp),
//     checkEmail: function (email) {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         return re.test(email)
//     },
// }

    var transporter = nodeMailer.createTransport(dev.smtp)
     let mailOptions = {
         from: 'ticketApp',
         to: req.body.email,
         subject: req.body.name + ' wants more information',
         text: req.body.name +  ' at email\t' + req.body.email + ' wrote you the following message:\t ' + req.body.message 
     }

     transporter.sendMail(mailOptions, (err, info) => {
         if (err) console.log(err)
         if (info) {
             res.send("Message sent: " + info.response)
         }

     })


});

app.listen(port, function () {
    console.log('Up and running on ', port);
});