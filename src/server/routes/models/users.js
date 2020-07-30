import express from "express";
import userModel from "../../models/Users";
import noteModel from "../../models/Notes";

const router = express.Router();

router.post("/", async (req, res) => {
  let result = await userModel.getUser(req.body._id);
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(400).json({ message: "Something went wrong" });
});

router.get("/notes", async (req, res) => {
  let result = await noteModel.getNoteByOwner(req.body._id);
  return res.status(200).json(result);
});

router.delete("/:userId", async (req, res) => {
  let result = await userModel.deleteUser(req.params.userId);
  return res.status(200).json(result);
});

module.exports = router;
