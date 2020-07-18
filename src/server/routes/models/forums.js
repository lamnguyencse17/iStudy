import express from "express";
import forumModel from "../../models/Forums";

const router = express.Router();

router.get("/:forumId", async (req, res) => {
  let { forumId } = req.params;
  let result = await forumModel.getForum(forumId);
  return res.status(200).json(result);
});

module.exports = router;
