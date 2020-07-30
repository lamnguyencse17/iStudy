import mongoose from "mongoose";
import userModel from "./Users";

const Notes = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const noteSchema = new Notes({
  created: { type: Date, default: Date.now },
  owner: { type: ObjectId, ref: "Users", required: true },
  content: { type: String, required: true },
  title: { type: String, required: true },
  lesson: { type: ObjectId, ref: "Lessons", required: true },
});

noteSchema.statics.getNoteByOwner = async function (ownerId) {
  return await this.find({ owner: mongoose.Types.ObjectId(ownerId) })
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
  userModel.addNote(result.owner, result._id);
  delete result.__v;
  delete result.owner;
  return result;
};

noteSchema.statics.deleteNote = async function (noteId) {
  await userModel.deleteNote(noteId);
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(noteId) });
};

noteSchema.statics.clearNotes = async function (userId) {
  return await this.deleteMany({ onwer: mongoose.Types.ObjectId(userId) });
};

const noteModel = mongoose.model("Notes", noteSchema);
export default noteModel;
