const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const session = require("express-session")
const nodemailer = require("nodemailer"); //For Sending Mail
const cookieParser = require('cookie-parser');
const path = require("path");
app.use(cookieParser())
const rsa_op = require('node-rsa'); // Importing RSA Key Module For Encryption Of Data
const rsa_key = new rsa_op({
    b: 512
});

const port = process.env.PORT || 8000;
const oneDay = (1000 * 60 * 60 * 24) * 30;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay
    },
    resave: false
}))

app.get('/', (req, res) => {
    res.send("Op")
})

app.get('/userRealData', (req, res) => {
    let sesData = req.cookies.ses;
    if (sesData === undefined) {
        res.send({
            isNull: true
        });
    } else {
        res.send(rsa_key.decrypt(sesData, 'utf8'));
    }
})

app.post('/userRealData', (req, res) => {
    let tempUserData = rsa_key.encrypt(req.body, 'base64');
    res.cookie(`ses`, tempUserData, {
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
        secure: true,
        httpOnly: true,
        sameSite: 'none'
    })
    res.status(200).json("Done")
})

//Sending OTP To Gmail, Start
const send_mail_op = (mail_data_10) => {
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'vartmywork@hotmail.com',
            pass: '8490856735v@'
        }
    });

    let mailOptions = {
        from: 'vartmywork@hotmail.com',
        to: mail_data_10.email_op_10,
        subject: mail_data_10.subjectText,
        text: mail_data_10.otp_op_10
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
//End

app.post('/getMailData', (req, res) => {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    let tempUserData1 = req.body;
    tempUserData1.pp = OTP;
    req.session.tempUserData = tempUserData1;
    req.session.save();

    let message_op = `Hi User, Your OTP(One Time Password) Is ${OTP}`;
    let mail_data_10 = {
        email_op_10: req.body.email,
        subjectText: "OTP For Registration",
        otp_op_10: message_op
    }
    send_mail_op(mail_data_10);
    res.status(201).json({
        mess: "Done"
    })
})


app.post('/getValOTP', (req, res) => {
    if (req.session.tempUserData.pp == req.body.otp) {
        req.session.tempUserData.pp = null;
        let tempUserData = rsa_key.encrypt(req.session.tempUserData, 'base64');
        res.cookie(`ses`, tempUserData, {
            expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
            secure: true,
            httpOnly: true,
            sameSite: 'none'
        })
        req.session.destroy();
        res.status(201).json({
            mess: "Done"
        })
    } else {
        res.status(401).json({
            mess: "Sorry"
        })
    }
})

app.get('/user', (req, res) => {
    res.clearCookie('ses')
    res.status(201).json({
        mess: "Done"
    })
})


app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

http.listen(port, () => {
    console.log("Ok");
})

io.on('connection', (socket) => {
    console.log("Connected Done Using Sockets");
    socket.on("sendMessage", messageData => {
        send_mail_op(messageData);
    })
})
