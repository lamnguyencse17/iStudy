import mongoose from "mongoose";
import noteModel from "./Notes";
import courseModel from "./Courses";

const Users = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const userSchema = new Users({
  name: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: Number, required: true },
  courses: [{ type: ObjectId, ref: "Courses" }],
  forums: [{ type: ObjectId, ref: "Forums" }],
  notes: [{ type: ObjectId, ref: "Notes" }],
});

userSchema.statics.getUser = async function (email) {
  return await this.findOne({ email }).select("-__v").lean();
};

userSchema.statics.createUser = async function (userDetails) {
  let { name, email, type } = userDetails;
  let result = await this.create({
    name,
    email,
    type,
  });
  result = result.toObject();
  delete result.__v;
  return result;
};

userSchema.statics.deleteUser = async function (userId) {
  // handle delete other
  noteModel.clearNotes(userId);
  courseModel.removeUser(userId);
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(userId) });
};

userSchema.statics.addCourse = async function (userId, courseId) {
  return await this.updateOne(
    { _id: mongoose.Types.ObjectId(userId) },
    {
      $push: {
        course: mongoose.Types.ObjectId(courseId),
      },
    }
  );
};

userSchema.statics.deleteNote = async function (noteId) {
  return await this.updateOne(
    {
      $in: {
        notes: mongoose.Types.ObjectId(noteId),
      },
    },
    {
      $pull: {
        notes: mongoose.Types.ObjectId(noteId),
      },
    }
  );
};

userSchema.statics.deleteForum = async function (forumId) {
  return await this.updateOne(
    {
      $in: {
        forums: mongoose.Types.ObjectId(forumId),
      },
    },
    {
      $pull: {
        forums: mongoose.Types.ObjectId(forumId),
      },
    }
  );
};

const userModel = mongoose.model("Users", userSchema);
export default userModel;
