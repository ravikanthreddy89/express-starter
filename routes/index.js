var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Entering the root request handler...................");
  res.render("index", { title: "Express" });
});

router.get("/health", function (req, res, next) {
  console.log("Entering health check");
  res.send("OK");
});

module.exports = router;
