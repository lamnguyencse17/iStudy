import express from "express";
import userModel from "../../models/Users";

const router = express.Router();

router.post("/", async (req, res) => {
  let result = await userModel.getUser(req.body._id);
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(400).json({ message: "Something went wrong" });
});

router.delete("/:userId", async (req, res) => {
  let result = await userModel.deleteUser(req.params.userId);
  return res.status(200).json(result);
});

module.exports = router;
