const { json } = require("express");

const generatedOtp = "1234";

module.exports.generateOtp = function(req, res) {
    return res.json(200, {
        otp: generatedOtp, // static for now. Can place OTP generation logic here later on
        message: "success"
    });
}

module.exports.verifyOtp = function(req,res) {

    if(generatedOtp === req.body.userEnteredOtp){
        return res.json(200, {
            message: "success"
        });
    } else{
        return res.json(200, {
            message: "mismatch"
        });
    }
}