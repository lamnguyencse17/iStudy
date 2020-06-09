import express from "express";
import threadModel from "../../models/Threads";

const router = express.Router();

router.get("/:threadId", async (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  // create new user
  // body:  poster, content, title, content
  // passed in as object
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.delete("/:threadId", (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

module.exports = router;
