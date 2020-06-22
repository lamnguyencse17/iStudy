import express from "express";
import userModel from "../../models/Users";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  let result = await userModel.isUserExist(req);
  if (result) {
    return res.status(200).json(result);
  }
  result = await userModel.getUser(res.params.userId);
  return res.status(200).json(result);
});

router.post("/", async (req, res) => {
  let result = await userModel.createUser(req.body);
  return res.status(200).json(result);
});

router.delete("/:userId", async (req, res) => {
  let result = await userModel.deleteUser(req.params.userId);
  return res.status(200).json(result);
});

module.exports = router;
