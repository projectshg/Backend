const mongoose                      = require("mongoose"),
      passportLocalMongoose         = require("passport-local-mongoose"),
      mongodbErrorHandler           = require("mongoose-mongodb-errors");


var userSchema      = new mongoose.Schema({
    username: {
        type        :String,
        trim        :true,
        required    :[true,"please enter password"],
        unique      :true
    }
});

userSchema.plugin(passportLocalMongoose,({usernameField:"username"}));
userSchema.plugin(mongodbErrorHandler);

module.exports  = mongoose.model("User",userSchema);