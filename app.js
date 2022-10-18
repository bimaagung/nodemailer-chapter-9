require('dotenv').config()
const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

transport.sendMail({
    from: '"Bima" <bimaagung.labs@gmail.com>',
    to: "otetnews@gmail.com",
    subject: "Submission: Chapter-9 Challenge#Bima Agung Setya Budi",
    text: "Favorite Song: I'm Good (Blue) | link github: https://github.com/bimaagung/nodemailer-chapter-9.git",
    html: `<body style="font-family: sans-serif;">
            <center>
            <div style="background-color: black; width: 500px;">
                <div style="background-color: darkorange; padding: 5px">
                    <h1><center>I'm Good (Blue)<br><span style="font-size: 16px; font-weight: 400; margin-top: 5px">David Guetta, Bebe Rexha</span></center></h1>
                </div>
                <div style="color: aliceblue; padding-bottom: 10px">
                <center><p>https://github.com/bimaagung/nodemailer-chapter-9.git</p></center>
                </div>
                </div>
            </center>
            </body>`
})

console.log('Mengirim pesan .....');

