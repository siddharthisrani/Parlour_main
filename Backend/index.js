const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const RegisteredEmail = require('./models/RegisteredEmail');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/parlourdata', { useNewUrlParser: true, useUnifiedTopology: true });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://parlour-main-fr.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // Preflight request, respond successfully
    res.status(200).end();
  } else {
    // Continue to the next middleware
    next();
  }
});

app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.json("Hello");
})
// Simple in-memory storage for OTPs (replace this with a database in a real-world scenario)
const otpStorage = {};

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siddharthisrani123@gmail.com', 
    pass: 'nrik cijb fhfn rnfw', 
  },
});

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

// Endpoint to send OTP to email
app.post('/api/send-otp', async (req, res) => {
    
    const { name, email } = req.body;
  
    try {
      // Check if the email is already registered
      const isRegistered = await RegisteredEmail.exists({ email });
  
      if (isRegistered) {
        return res.status(400).json({ error: 'Email is already registered' });
      }
  
      // Generate and store OTP
      const otp = generateOTP();
      otpStorage[email] = otp;
  
      // Send OTP via email
      const mailOptions = {
        from: 'siddharthisrani123@gmail.com',
        to: email,
        subject: 'Your OTP for Verification',
        html: `
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 10px; font-family: 'Arial', sans-serif;">
            <h2 style="color: #6c63ff;">Hello ${name},</h2>
            <p style="line-height: 1.6;">Welcome to our community! Your OTP for verification is:</p>
            <h1 style="color: #6c63ff; font-size: 2em; margin-bottom: 20px;">${otp}</h1>
            <p style="line-height: 1.6;">Please enter this OTP to claim your Gift.</p>
            <p style="line-height: 1.6;">If you didn't request this OTP, please ignore this email.</p>
            <p style="line-height: 1.6;">Best regards,<br/>Jyoti's makeover studio</p>
          </div>
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      // Store user data in MongoDB
      await RegisteredEmail.create({ name, email });
  
      res.json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
 
// Endpoint to verify OTP
app.post('/api/verify-otp', (req, res) => {

  const { email, otp } = req.body;

  if (!otpStorage[email] || otpStorage[email].toString() !== otp.toString()) {
    console.log('Incorrect OTP');
    console.log('Comparison Result:', otpStorage[email].toString() !== otp.toString());
    console.log('Comparison Type:', typeof (otpStorage[email].toString() !== otp.toString()));
    return res.status(401).json({ error: 'Incorrect OTP' });
  }
  
  // Clear the OTP from storage after successful verification
  delete otpStorage[email];

  // Send the selected offer message as a response
  res.json({ message: 'OTP verified successfully.'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
