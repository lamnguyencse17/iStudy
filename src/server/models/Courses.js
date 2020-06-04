import mongoose from "mongoose";

const Courses = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const courseSchema = new Courses({
  title: { type: String, required: true },
  description: { type: String, required: true },
  users: [{ type: ObjectId, ref: "Users" }],
  lessons: [{ type: ObjectId, ref: "Lessons" }],
  owner: { type: ObjectId, ref: "Users", required: true },
  forumId: { type: ObjectId, ref: "Forums" },
});

const courseModel = mongoose.model("Courses", courseSchema);
export default courseModel;
