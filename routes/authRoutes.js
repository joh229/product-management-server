const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/authController");
router.get("/test", (req, res) => {
    res.send("Auth route working");
});
console.log("AUTH FILE PATH:", __filename);
router.get("/test", (req,res)=>{
  console.log("TEST ROUTE HIT");
  res.send("WORKING 123");
});

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

module.exports = router;