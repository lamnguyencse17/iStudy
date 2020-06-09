import express from "express";
import replyModel from "../../models/Replies";

const router = express.Router();

router.get("/:replyId", async (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  // create new user
  // body:  poster, content, threadId
  // passed in as object
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.delete("/:replyId", (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

module.exports = router;
