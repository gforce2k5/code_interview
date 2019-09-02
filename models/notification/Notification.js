const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
  accountId: {type: String, required: true},
  name: String,
  color: String
}, {timestamps: true});

module.exports = mongoose.model('Notification', Notification);