import mongoose from "mongoose";

const Forums = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const forumSchema = new Forums({
  users: [{ type: ObjectId, ref: "Users" }],
  threads: { type: ObjectId, ref: "Threads" },
  courseId: { type: ObjectId, ref: "Courses", required: true },
});

const forumModel = mongoose.model("Forums", forumSchema);
export default forumModel;
