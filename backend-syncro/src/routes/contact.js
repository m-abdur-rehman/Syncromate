const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Contact = require('../models/Contact.js'); // Assuming you have a Contact model

router.post('/contact', async (req, res) => {
    const { fullName, email, company, message } = req.body;

    try {
        // Save to MongoDB 
        const newContact = new Contact({ fullName, email, company, message });
        await newContact.save();

        // Configure Nodemailer transporter
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail', // or another service
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS
        //     }
        // });

        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: "process.env.EMAIL_USER",
                pass: "process.env.EMAIL_PASS"
            },
            secure: true,
        });


        await new Promise((resolve,reject) => {

            transporter.verify(function(error,success){
                if(error){
                    console.log(error);
                    reject(error);
                }
                else{
                    console.log("server is ready to take messages");
                    resolve(success);
                }
            });
        });


        // Send email
        // await transporter.sendMail({
        //     from: process.env.EMAIL_USER,
        //     to: email,
        //     subject: `Thank you for contacting us, ${fullName}`,
        //     text: `We received your message and will get back to you soon.\n\nYour message:\n${message}`
        // });


        const mailData = {
            from: {
                name: `${fullName}`,
                address: process.env.EMAIL_USER,
            },
            replyTo: email,
            to: email,
            subject: `Thank you for contacting us, ${fullName}`,
            text: 'We received your message and will get back to you soon.\n\nYour message:\n${message}',
            html: `${message}`,
        };
        
        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = router;














// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');

// // POST route to handle form submission
// router.post('/contact', (req, res) => {
//     const { fullName, email, company, message } = req.body;

//     // Setup Nodemailer for sending email
//     const transporter = nodemailer.createTransport({
//         host: "live.smtp.mailtrap.io",
//         port: 587,
//         auth: {
//           user: "api",
//           pass: "d300c05e0fb14a5e0d3c64cecdaaab91"
//         }
//     });

//     const mailOptions = {
//         from: email,
//         to: 'syncromate.solutions@gmail.com',
//         subject: `New Contact Form Submission from ${fullName}`,
//         text: `Company: ${company}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).json({ error: 'Error sending email.' });
//         }
//         res.status(200).json({ message: 'Email sent successfully!' });
//     });
// });

// module.exports = router;



// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(express.json());

// app.post('/api/contact', (req, res) => {
//     const { fullName, email, company, message } = req.body;

//     // Setup Nodemailer for sending email (you can adjust this based on your service)
//     var transporter = nodemailer.createTransport({
//         host: "live.smtp.mailtrap.io",
//         port: 587,
//         auth: {
//           user: "api",
//           pass: "d300c05e0fb14a5e0d3c64cecdaaab91"
//         }
//       });

//     const mailOptions = {
//         from: 'syncromate.solutions@gmail.com',
//         to: email,
//         subject: `New Contact Form Submission from ${fullName}`,
//         text: `Company: ${company}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).json({ error: 'Error sending email.' });
//         }
//         res.status(200).json({ message: 'Email sent successfully!' });
//     });
// });

// app.listen(587, () => {
//     console.log('Server is running on port 5000');
// });
