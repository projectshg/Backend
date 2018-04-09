const express           = require("express"),
      bodyParser        = require("body-parser"),
      mongoose          = require("mongoose"),
      passport          = require("passport"),
      LocalStrategy     = require("passport-local"),
      expressValidator  = require("express-validator");

      mongoose.connect("mongodb://localhost/logindemo");

const User              = require("./models/user");


const indexRoutes = require("./Routes/indexRoutes"),
      loginRoutes = require("./Routes/loginRoutes"),
      registerRoutes = require("./Routes/registerRoutes");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret              : "saga",
    resave              : false,
    saveUninitialized   : false
}));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/",indexRoutes);
app.use("/login",loginRoutes);
app.use("/register",registerRoutes);
app.listen(8080,function(){
    console.log("Server Started!!");
});