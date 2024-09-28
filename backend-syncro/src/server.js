const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', contactRoutes);

// Vercel serverless function handler
module.exports = app;


// const dotenv = require('dotenv');
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const contactRoutes = require('./routes/contact');  // Import the contact route file

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());  // Enable Cross-Origin Resource Sharing
// app.use(express.json());  // Middleware to parse incoming JSON data

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected successfully'))
//     .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api', contactRoutes);  // Use the contact route under /api/contact

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });















// const express = require('express');
// const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // POST route to handle form submission
// app.post('/api/contact', async (req, res) => {
//     const { name, email, company, message } = req.body;

//     // Optional: Save form data to MongoDB here
//     // Example: Create a new model to store form submissions

//     // Nodemailer setup
//     const transporter = nodemailer.createTransport({
//         host: "live.smtp.mailtrap.io",
//         port: 587,
//         auth: {
//           user: process.env.MAILTRAP_USER,  // Move sensitive info to environment variables
//           pass: process.env.MAILTRAP_PASS
//         }
//     });

//     const mailOptions = {
//         from: "syncromate.solutions@gmail.com",
//         to: email,
//         subject: `New Contact Form Submission from ${name}`,
//         text: `Company: ${company}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Form submitted successfully!' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error sending email.' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });













