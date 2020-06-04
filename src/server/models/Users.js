import mongoose from "mongoose";

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

const userModel = mongoose.model("Users", userSchema);
export default userModel;
