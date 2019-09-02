const express = require('express');
const router = express.Router();
const {createNotification} = require('./create');
const {showNotifications} = require('./show');
const {deleteNotifications} = require('./delete');

router.post('/', createNotification)
      .get('/', showNotifications)
      .delete('/', deleteNotifications);

module.exports = router;