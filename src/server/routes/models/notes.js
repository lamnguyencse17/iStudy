import express from "express";
import noteModel from "../../models/Notes";

const router = express.Router();

router.get("/:noteId", (req, res) => {
  res.send(req.params.noteId);
});

router.post("/", (req, res) => {});

router.delete("/:noteId", (req, res) => {});

module.exports = router;
