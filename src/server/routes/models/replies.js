import express from "express";
import replyModel from "../../models/Replies";

const router = express.Router();

router.get("/:replyId", async (req, res) => {
  let {replyId} = req.params
  let result = await replyModel.getReply(replyId)
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  let {poster, content, threadId} = req.body
  let result = await replyModel.createReply({poster, content, threadId})
  return res.status(200).json(result);
});

router.delete("/:replyId", (req, res) => {
  let {replyId} = req.params
  let result = await replyModel.deleteReply(replyId)
  return res.status(200).json(result);
});

module.exports = router;
