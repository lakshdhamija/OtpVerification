const express = require('express');
const router = express.Router();
const otpApi = require('../../../controllers/api/v1/otp_api');

router.get('/generateOtp', otpApi.generateOtp); // generate Otp
router.post('/verifyOtp', otpApi.verifyOtp); // Verify Otp

module.exports = router;