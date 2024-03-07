// models/RegisteredEmail.js
const mongoose = require('mongoose');

const registeredEmailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const RegisteredEmail = mongoose.model('RegisteredEmail', registeredEmailSchema);

module.exports = RegisteredEmail;
