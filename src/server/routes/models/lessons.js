import express from "express";
import lessonModel from "../../models/Lessons";

const router = express.Router();

router.get("/:lessonId", async (req, res) => {
  let { lessonId } = req.params;
  let result = await lessonModel.getLesson(lessonId);
  return res.status(200).json(result);
});

router.post("/", async (req, res) => {
  let { title, description, courseId } = req.body;
  let result = await lessonModel.createLesson({ title, description, courseId });
  return res.status(200).json(result);
});

router.delete("/:lessonId", async (req, res) => {
  let { replyId } = req.params;
  let result = await lessonModel.deleteLesson(replyId);
  return res.status(200).json(result);
});

module.exports = router;
