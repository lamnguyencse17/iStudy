import express from "express";
import userModel from "../../models/Users";

const router = express.Router();

router.post("/", async (req, res) => {
  let result = await userModel.getUser(req);
  if (result) {
    return res.status(200).json(result);
  }
  result = await userModel.createUser(req.body);
  return res.status(200).json(result);
});

router.delete("/:userId", async (req, res) => {
  let result = await userModel.deleteUser(req.params.userId);
  return res.status(200).json(result);
});

module.exports = router;
