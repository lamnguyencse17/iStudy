import mongoose from "mongoose";

const Threads = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const threadSchema = new Threads({
  created: { type: Date, required: true, default: Date.now },
  poster: { type: ObjectId, ref: "Users", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  replies: [{ type: ObjectId, ref: "Replies" }],
});

const threadModel = mongoose.model("Threads", threadSchema);
export default threadModel;
