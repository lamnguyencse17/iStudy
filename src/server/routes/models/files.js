import express from "express";
import { writeToGridFS, getFileFromGridFS } from "../../models/Files";
import { Readable } from "stream";
const router = express.Router();

router.get("/:fileId", async (req, res) => {
  let fileId = req.params.fileId;
  getFileFromGridFS(fileId).then(async (file, err) => {
    if (err) {
      console.log(err);
    } else {
      let buf;
      let bufs = [];
      file.data.on("data", async (data) => {
        bufs.push(data);
      });
      file.data.on("end", async () => {
        buf = Buffer.concat(bufs);
        res.setHeader("Content-Type", file.contentType);
        res.setHeader(
          "Content-Disposition",
          `attachment;filename=${file.filename}`
        );
        let readableInstanceStream = new Readable({
          read() {
            this.push(buf);
            this.push(null);
          },
        });
        readableInstanceStream.pipe(res);
      });
    }
  });
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
