"use strict";

var JwtStrategy = require("passport-jwt").Strategy;

var ExtractJwt = require("passport-jwt").ExtractJwt;

var _require = require("../models/Users"),
    userModel = _require["default"];

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "1234567890";
opts.passReqToCallback = true;

module.exports = function (passport) {
  passport.use(new JwtStrategy(opts, function (req, jwt_payload, done) {
    userModel.findById(jwt_payload._id).then(function (user) {
      if (user) {
        req.body._id = jwt_payload._id;
        return done(null, user);
      }

      return done(null, false);
    })["catch"](function (err) {
      return console.log(err);
    });
  }));
};