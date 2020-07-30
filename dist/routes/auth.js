"use strict";

var express = require("express");

var router = express.Router();
router.use("/register", function (req, res, next) {
  next();
}, require("./auth/register"));
router.use("/login", function (req, res, next) {
  next();
}, require("./auth/login"));
module.exports = router;