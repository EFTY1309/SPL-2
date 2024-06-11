const mongoose = require('mongoose');

const registeredUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  courses: {
    type: [String],
    required: true
  },
  tran_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('RegisteredUser', registeredUserSchema);
