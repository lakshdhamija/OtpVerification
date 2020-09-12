const generatedOtp = "1234";

module.exports.generateOtp = function(req, res) {
    return res.status(200).json({
        otp: generatedOtp, // static for now. Can place OTP generation logic here later on
        message: "success"
    });
}

module.exports.verifyOtp = function(req,res) {
    if(generatedOtp === req.body.userEnteredOtp){
        return res.status(200).json({
            message: "success"
        });
    } else{
        return res.status(401).json({
            message: "mismatch"
        });
    }
}