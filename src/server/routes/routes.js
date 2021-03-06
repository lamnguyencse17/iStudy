const express = require("express");
const router = express.Router();

router.use(
  "/models",
  (req, res, next) => {
    next();
  },
  require("./models")
);

router.use(
  "/auth",
  (req, res, next) => {
    next();
  },
  require("./auth")
);

module.exports = router;
