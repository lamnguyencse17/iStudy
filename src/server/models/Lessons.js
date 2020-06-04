import mongoose from "mongoose";

const Lessons = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const lessonSchema = new Lessons({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now },
  files: [{ type: ObjectId, ref: "Files.files" }],
});

const lessonModel = mongoose.model("Lessons", lessonSchema);
export default lessonModel;
