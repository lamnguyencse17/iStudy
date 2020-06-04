const express = require("express");
const router = express.Router();

router.use(
  "/notes/",
  (req, res, next) => {
    next();
  },
  require("./models/notes")
);

module.exports = router;
