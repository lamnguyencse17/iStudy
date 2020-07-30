const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { default: userModel } = require("../models/Users");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "1234567890";
opts.passReqToCallback = true;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (req, jwt_payload, done) => {
      userModel
        .findById(jwt_payload._id)
        .then((user) => {
          if (user) {
            console.log(jwt_payload)
            req.body.owner = jwt_payload._id;
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
