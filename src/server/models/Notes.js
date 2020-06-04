import mongoose from "mongoose";

const Notes = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const noteSchema = new Notes({
  created: { type: Date, default: Date.now },
  owner: { type: ObjectId, ref: "Users", required: true },
  content: { type: String, required: true },
  title: { type: String, required: true },
  lesson: { type: ObjectId, ref: "Lessons", required: true },
});

noteSchema.statics.getNote = async function (noteId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(noteId) })
    .select("-__v -owner")
    .lean();
};

noteSchema.statics.createNote = async function (noteDetails) {
  let { owner, content, title, lesson } = noteDetails;
  let result = await this.create({
    owner: mongoose.Types.ObjectId(owner),
    content,
    title,
    lesson: mongoose.Types.ObjectId(lesson),
  });
  result = result.toObject();
  delete result.__v;
  delete result.owner;
  return result;
};

noteSchema.statics.deleteNote = async function (noteId) {
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(noteId) });
};

const noteModel = mongoose.model("Notes", noteSchema);
export default noteModel;
