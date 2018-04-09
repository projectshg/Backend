const express =  require("express"),
      router  =  express.Router();

router.get("/success", function(req, res) {
  console.log("success");
  res.send("success");
});

router.get("/failure",function(req,res){
  console.log("failure");
    res.send("failure");
});

module.exports = router;
