const express = require("express");
const router = express.Router();




router.post("/", async (req, res) => {
    let success = true;
    return res.json({success,message : "1. I've initially used Nodemailer to send otp to email but nodemailer do not work on render now, 2. Then i've used sendgrid to send mail but after a time it's free subscription got over ,3. i tried resend to send mails but it do not worked for gmail ids it needs domain "})
});

module.exports = router;