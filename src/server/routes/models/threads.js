import express from "express";
import threadModel from "../../models/Threads";

const router = express.Router();

router.get("/:threadId", async (req, res) => {
  let { threadId } = req.params;
  let result = await threadModel.getThread(threadId);
  return res.status(200).json(result);
});

router.post("/", async (req, res) => {
  let { poster, content, title } = req.body;
  let result = await threadModel.createThread({
    poster,
    content,
    title,
  });
  return res.status(200).json(result);
});

router.delete("/:threadId", async (req, res) => {
  let { threadId } = req.params;
  let result = await threadModel.deleteThread(threadId);
  return res.status(200).json(result);
});

module.exports = router;
