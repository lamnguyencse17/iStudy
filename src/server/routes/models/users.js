import express from "express";
import userModel from "../../models/Users";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.post("/", (req, res) => {
  // create new user
  // body: name, email, type
  // passed in use as object
  //   let result = await function goes here;
  return res.status(200).json(result);
});

router.delete("/:userId", (req, res) => {
  // TODO
  // use params
  //  use functions in userModel with await
  //   let result = await function goes here;
  return res.status(200).json(result);
});

module.exports = router;
