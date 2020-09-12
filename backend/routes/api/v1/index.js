const express = require('express');
const router = express.Router();

// forward to appropriate path
router.use('/otp', require('./otp'));

module.exports = router;