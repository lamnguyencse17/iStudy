import mongoose from "mongoose";

const Forums = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const forumSchema = new Forums({
  title: { type: String, required: true },
  users: [{ type: ObjectId, ref: "Users" }],
  threads: [{ type: ObjectId, ref: "Threads" }],
  courseId: { type: ObjectId, ref: "Courses", required: true },
});

forumSchema.statics.getForum = async function (forumId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(forumId) })
    .select("-__v -courseId")
    .populate({
      path: "threads",
      select: "created title",
      options: { lean: true },
    })
    .lean();
};

forumSchema.statics.createForum = async function (forumDetails) {
  // handle forumId
  let { courseId, title, owner } = forumDetails;
  let result = await this.create({
    users: [mongoose.Types.ObjectId(owner)],
    title,
    courseId: mongoose.Types.ObjectId(courseId),
  });
  result = result.toObject();
  delete result.__v;
  delete result.users;
  delete result.threads;
  delete result.courseId;
  return result;
};

forumSchema.statics.deleteForum = async function (forumId) {
  // handle file deletion
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(forumId) });
};

const forumModel = mongoose.model("Forums", forumSchema);
export default forumModel;
