const express = require("express");
const router = express.Router();


router.post('/', async (req, res) => {






    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    javascript
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // sgMail.setDataResidency('eu'); 
    // uncomment the above line if you are sending mail using a regional EU subuser

    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'helpdsahelper@gmail.com', // Change to your verified sender
        subject: req.body.subject,
        html: req.body.htmlText,
    }
    sgMail
        .send(msg, (err) => {
            if (err) {
                return res.json({ success, error: err });
            } else {
                success = true;
                return res.json({ success, message: "Email Sent" });
            }
        })


})


module.exports = router;

