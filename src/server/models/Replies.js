import mongoose from "mongoose";

const Replies = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const replySchema = new Replies({
  created: { type: Date, required: true, default: Date.now },
  poster: { type: ObjectId, ref: "Users", required: true },
  content: { type: String, required: true },
});

const replyModel = mongoose.model("replies", replySchema);
export default replyModel;
