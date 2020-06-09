import express from "express";
import courseModel from "../../models/Courses";

const router = express.Router();

router.get("/:courseId", async (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  // create new user
  // body:  owner, title, description
  // passed in as object
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.delete("/:courseId", (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

module.exports = router;
