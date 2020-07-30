"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _passport = _interopRequireDefault(require("passport"));

var express = require("express");

var router = express.Router();
router.use("/notes/", _passport["default"].authenticate("jwt", {
  session: false
}), require("./models/notes"));
router.use("/files/", require("./models/files"));
router.use("/lessons/", _passport["default"].authenticate("jwt", {
  session: false
}), require("./models/lessons"));
router.use("/forums/", function (req, res, next) {
  next();
}, require("./models/forums"));
router.use("/courses/", function (req, res, next) {
  next();
}, require("./models/courses"));
router.use("/replies/", function (req, res, next) {
  next();
}, require("./models/replies"));
router.use("/threads/", function (req, res, next) {
  next();
}, require("./models/threads"));
router.use("/users/", _passport["default"].authenticate("jwt", {
  session: false
}), require("./models/users"));
module.exports = router;