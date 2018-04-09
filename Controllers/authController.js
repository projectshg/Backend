const mongoose      =  require("mongoose"),
      passport      = require("passport");

exports.login           = passport.authenticate("local",{
            successRedirect:"/success",
            failureRedirect:"/failure"
        });

