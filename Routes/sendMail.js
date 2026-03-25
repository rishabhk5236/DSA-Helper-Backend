const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/',async (req,res)=>{

    let success=false;



    // creating message 
    const msg={
        from:"helpdsahelper@gmail.com",
        to:req.body.email,
        subject:req.body.subject,
        html:req.body.htmlText,
       
    };


    



 nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USERNAME,
            pass:process.env.PASSWORD
        },
        port:465,
        secure:true,
        host:'smtp.gmail.com'
    })
    .sendMail(msg,(err)=>{
        if(err){
            return res.json({success,error:err});
        }else{
            success=true;
            return res.json({success,message:"Email Sent"});
        }
    })


})

module.exports=router;