import express from "express";
import lessonModel from "../../models/Lessons";

const router = express.Router();

router.get("/:lessonId", async (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  // create new user
  // body:  title, description
  // passed in as object
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.delete("/:lessonId", (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

module.exports = router;
