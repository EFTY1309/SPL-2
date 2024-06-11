const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cartData: {
    type: Object,
  },
  phone: {
    type: String,
    required: true
  },
  professionalPosition: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  courses: {
    type: [String],
    required: true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;