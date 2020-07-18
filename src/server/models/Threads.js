import mongoose from "mongoose";
import replyModel from "./Replies";

const Threads = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const threadSchema = new Threads({
  created: { type: Date, default: Date.now },
  poster: { type: ObjectId, ref: "Users", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  replies: [{ type: ObjectId, ref: "Replies" }],
  forum: { type: ObjectId, ref: "Forums", required: true },
});

threadSchema.statics.getThread = async function (threadId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(threadId) })
    .select("-__v")
    .populate({
      path: "forum",
      select: "title",
      options: { lean: true },
    })
    .populate({
      path: "poster",
      select: "name",
      options: { lean: true },
    });
};

threadSchema.statics.createThread = async function (threadDetails) {
  let { poster, content, title } = threadDetails;
  let result = await this.create({
    content,
    title,
    poster: mongoose.Types.ObjectId(poster),
  });
  result = result.toObject();
  delete result.__v;
  delete result.poster;
  return result;
};

threadSchema.statics.deleteThread = async function (threadId) {
  replyModel.clearReplies(threadId);
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(threadId) });
};

const threadModel = mongoose.model("Threads", threadSchema);
export default threadModel;
