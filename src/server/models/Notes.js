import mongoose from "mongoose";

const Notes = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const noteSchema = new Notes({
  created: { type: Date, required: true, default: Date.now },
  owner: { type: ObjectId, ref: "Users", required: true },
  content: { type: String, required: true },
  title: { type: String, required: true },
  lesson: { type: ObjectId, ref: "Lessons", required: true },
});

const noteModel = mongoose.model("Notes", noteSchema);
export default noteModel;
