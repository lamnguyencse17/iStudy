import express from "express";
import noteModel from "../../models/Notes";

const router = express.Router();

router.get("/:noteId", async (req, res) => {
  let result = await noteModel.getNote(req.params.noteId);
  return res.status(200).json(result);
});

router.post("/", async (req, res) => {
  let { content, title, lesson } = req.body;
  let owner = req.body._id;
  let result = await noteModel.createNote({ owner, content, title, lesson });
  return res.status(200).json(result);
});

router.delete("/:noteId", async (req, res) => {
  let result = await noteModel.deleteNote(req.params.noteId);
  return res.status(200).json(result);
});

module.exports = router;
