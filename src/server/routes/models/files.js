import express from "express";
import { writeToGridFS } from "../../models/Files";
const router = express.Router();

router.get("/:filename", async (req, res) => {
  let fileId = req.params.fileId;
  // Look at: https://github.com/lamnguyencse17/Sender/blob/master/src/server/routes/protected/file.js
  // remove the cryptography header leave only the contentType
});

router.post("/", async (req, res) => {
  if (!req.files) {
    res.send({
      status: false,
      message: "No file uploaded",
    });
  } else {
    let uploadFile = req.files.uploadFile;
    uploadFile.owner = "5ee4690b1db6e14cd1c85ead";
    uploadFile.lesson = "6ee4690b1db6e14cd1c85ead";
    let result = await writeToGridFS(uploadFile);
    return res.status(200).json({ ...result });
  }
});

module.exports = router;
