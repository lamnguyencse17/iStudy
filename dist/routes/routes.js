"use strict";

var express = require("express");

var router = express.Router();
router.use("/models", function (req, res, next) {
  next();
}, require("./models"));
router.use("/auth", function (req, res, next) {
  next();
}, require("./auth"));
module.exports = router;