import mongoose from "mongoose";

const Replies = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const replySchema = new Replies({
  created: { type: Date, default: Date.now },
  poster: { type: ObjectId, ref: "Users", required: true },
  content: { type: String, required: true },
  threadId: { type: ObjectId, ref: "Threads", required: true },
});

replySchema.statics.getReply = async function (replyId) {
  return await this.findOne({ _id: mongoose.Types.ObjectId(replyId) })
    .select("-__v -threadId")
    .populate({
      path: "poster",
      select: "name",
      options: { lean: true },
    })
    .lean();
};

replySchema.statics.createReply = async function (replyDetails) {
  let { poster, content, threadId } = replyDetails;
  let result = await this.create({
    content,
    poster: mongoose.Types.ObjectId(poster),
    threadId: mongoose.Types.ObjectId(threadId),
  });
  result = result.toObject();
  delete result.__v;
  delete result.poster;
  delete result.threadId;
  return result;
};

replySchema.statics.deleteReply = async function (replyId) {
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(replyId) });
};

replySchema.statics.clearReplies = async function (threadId) {
  return await this.deleteMany({ threadId: mongoose.Types.ObjectId(threadId) });
};

const replyModel = mongoose.model("replies", replySchema);
export default replyModel;
