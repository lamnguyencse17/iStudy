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
  return await this.deleteOne({ _id: mongoose.Types.ObjectId(userId) });
};

const userModel = mongoose.model("Users", userSchema);
export default userModel;
