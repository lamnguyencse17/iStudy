import express from "express";
import courseModel from "../../models/Courses";

const router = express.Router();

router.get("/:courseId", async (req, res) => {
  let { courseId } = req.params;
  let result = await courseModel.getCourse(courseId);
  return res.status(200).json(result);
});

router.post("/search", async (req, res) => {
  let result = await courseModel.findCourses(req.body.term);
  return res.status(200).json(result);
});

router.get("/", async (req, res) => {
  let result = await courseModel.getManyCourses();
  return res.status(200).json(result);
});

router.post("/", async (req, res) => {
  let { owner, title, description } = req.body;
  let result = await courseModel.createCourse({ owner, title, description });
  return res.status(200).json(result);
});

router.delete("/:courseId", async (req, res) => {
  let { replyId } = req.params;
  let result = await courseModel.deleteCourse(replyId);
  return res.status(200).json(result);
});

module.exports = router;
