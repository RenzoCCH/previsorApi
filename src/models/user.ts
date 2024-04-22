import { Schema } from "mongoose";
import { User } from "../types/quiz/user";
const User = new Schema<User>({
  id: { type: String, required: true },
  name: String,
  lastName: String,
  email: String,
  last20quiz: [String],
  dateCreated: Date,
  dateUpdated: Date,
  isAnonymous: Boolean,
});
export default User;
