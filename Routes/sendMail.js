const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
    let success = false;

    try {
        const msg = {
            to: req.body.email,
            from: "helpdsahelper@gmail.com", // must be verified in SendGrid
            subject: req.body.subject,
            html: req.body.htmlText,
        };

        await sgMail.send(msg);

        success = true;
        return res.json({ success, message: "Email Sent" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success, error: err.message });
    }
});

module.exports = router;