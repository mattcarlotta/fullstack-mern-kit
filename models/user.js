import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, lowercase: true },
  backgroundInfo: String,
  address: {
    street: String,
    suite: String,
    city: String,
    state: String,
    zipCode: String,
  },
});

userSchema.statics.createUser = async function newUser(user) {
  if (!user) throw new Error("User required!");

  try {
    return await this.create(user);
  } catch (err) {
    throw new Error(err);
  }
};

export default model("user", userSchema);
