const express = require("express");
const router = express.Router();

router.use(
  "/register",
  (req, res, next) => {
    next();
  },
  require("./auth/register")
);

router.use(
  "/login",
  (req, res, next) => {
    next();
  },
  require("./auth/login")
);

module.exports = router;
