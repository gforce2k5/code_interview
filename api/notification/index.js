const express = require('express');
const router = express.Router();
const {createNotification} = require('./create');

router.post('/', createNotification);

module.exports = router;