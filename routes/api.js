var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    console.log("object")
  res.status(200).send("api must be handeled here");
  res.end();
});

module.exports = router;
