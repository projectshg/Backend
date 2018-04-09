const mongoose          = require("mongoose"),
      User              = require("../models/user");

exports.vadilateRegister        = (req,res,next)=>{
    req.sanitizeBody("username");
    req.checkBody("username","Please enter name").notEmpty();
    req.checkBody("password","Please enter password").notEmpty();
    req.checkBody("password-confirm","please enter password").notEmpty();
    req.checkBody("password-confirm","oops!password do not match").equals(req.body.password);

    const errors    = req.validationErrors();
    if(errors){
        res.json({title:"Validation Error",error:errors});
        return;
    }
    next();
};

exports.Register = (req,res,next)=>{
    console.log("Register!!");
    const user     = new User({username:req.body.username});
    User.register(user,req.body.password,function(err,user){
        if(err){
            res.json({title:"Regestration"});
        }
        else{
            console.log(user.username);
            next();
        }
    });
};