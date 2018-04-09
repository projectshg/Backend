const express = require("express"),
  router = express.Router();
 
const authController = require("../Controllers/authController"),
      userController = require("../Controllers/userController");

router.post("/",
            userController.vadilateRegister,
            userController.Register,
            authController.login);


module.exports = router;
