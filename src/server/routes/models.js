const express = require("express");
const router = express.Router();

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
  (req, res, next) => {
    next();
  },
  require("./models/users")
);

module.exports = router;
