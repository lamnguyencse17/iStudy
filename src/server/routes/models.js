const express = require("express");
const router = express.Router();
import passport from "passport";

router.use(
  "/notes/",
  (req, res, next) => {
    next();
  },
  require("./models/notes")
);

router.use(
  "/files/",
  (req, res, next) => {
    next();
  },
  require("./models/files")
);

router.use(
  "/lessons/",
  (req, res, next) => {
    next();
  },
  require("./models/lessons")
);

router.use(
  "/forums/",
  (req, res, next) => {
    next();
  },
  require("./models/forums")
);

router.use(
  "/courses/",
  (req, res, next) => {
    next();
  },
  require("./models/courses")
);

router.use(
  "/replies/",
  (req, res, next) => {
    next();
  },
  require("./models/replies")
);

router.use(
  "/threads/",
  (req, res, next) => {
    next();
  },
  require("./models/threads")
);

router.use(
  "/users/",
  passport.authenticate("jwt", { session: false }),
  require("./models/users")
);

module.exports = router;
