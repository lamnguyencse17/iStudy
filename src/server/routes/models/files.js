import express from "express";
const router = express.Router();

router.use("/file/:filename", async (req, res) => {
  let fileId = req.params.fileId;
  // Look at: https://github.com/lamnguyencse17/Sender/blob/master/src/server/routes/protected/file.js
  // remove the cryptography header leave only the contentType
});

module.exports = router;
