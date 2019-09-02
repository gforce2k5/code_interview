const express = require('express');
const router = express.Router();
const {createNotification} = require('./create');
const {showNotifications} = require('./show');

router.post('/', createNotification)
      .get('/', showNotifications);

module.exports = router;