import mongoose, { mongo } from "mongoose";
import forumModel from "./Forums";
import userModel from "./Users";

const Courses = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const courseSchema = new Courses({
  title: { type: String, required: true },
  description: { type: String, required: true },
  users: [{ type: ObjectId, ref: "Users" }],
  lessons: [{ type: ObjectId, ref: "Lessons" }],
  owner: { type: ObjectId, ref: "Users", required: true },
  forumId: { type: ObjectId, ref: "Forums", default: null },
});

courseSchema.statics.getCourse = async function (courseId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(courseId) })
    .select("-__v -forumId")
    .populate({
      path: "lessons",
      select: "title",
      options: { lean: true },
    })
    .populate({
      path: "owner",
      select: "name",
      options: { lean: true },
    })
    .lean();
};

courseSchema.statics.createCourse = async function (courseDetails) {
  let { owner, title, description } = courseDetails;
  let result = await this.create({
    owner: mongoose.Types.ObjectId(owner),
    title,
    description,
  });
  result = result.toObject();
  delete result.__v;
  delete result.owner;
  delete result.users;
  delete result.lessons;
  delete result.forumId;
  return result;
};

courseSchema.post("save", async (doc, next) => {
  let { title, owner, _id } = doc;
  let result = await forumModel.createForum({ courseId: _id, title, owner });
  await userModel.addCourse(owner, _id);
  this.updateOne(
    { _id: mongoose.Types.ObjectId(_id) },
    {
      forumId: mongoose.Types.ObjectId(result._id),
    }
  );
  next();
});

courseSchema.statics.removeUser = async function (userId) {
  return await this.updateMany(
    {
      $in: {
        users: [mongoose.Types.ObjectId(userId)],
      },
    },
    {
      $pull: {
        users: mongoose.Types.ObjectId(userId),
      },
    }
  );
};

const courseModel = mongoose.model("Courses", courseSchema);
export default courseModel;
