import mongoose from "mongoose";

const Lessons = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const lessonSchema = new Lessons({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now },
  files: { type: ObjectId, ref: "Files.files" },
  courseId: { type: ObjectId, ref: "Courses" },
});

lessonSchema.statics.getLesson = async function (lessonId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(lessonId) })
    .select("-__v")
    .lean();
};

lessonSchema.statics.createLesson = async function (lessonDetails) {
  let { title, description, courseId } = lessonDetails;
  let result = await this.create({
    title,
    description,
    courseId: mongoose.Types.ObjectId(courseId),
  });
  result = result.toObject();
  delete result.__v;
  delete result.created;
  return result;
};

lessonSchema.statics.deleteLesson = async function (lessonId) {
  // handle file deletion
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(lessonId) });
};

lessonSchema.statics.clearLessons = async function (forumId) {
  // handle file deletion
  return await this.deleteMany({ courseId: mongoose.Types.ObjectId(lessonId) });
};

const lessonModel = mongoose.model("Lessons", lessonSchema);
export default lessonModel;
