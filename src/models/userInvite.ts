import { Schema } from "mongoose";
import { UserInvite } from "../types/quiz/userInvite";

const UserInvite = new Schema<UserInvite>({
  quizId: { type: String, required: false },
  userMail: { type: String, required: false },
  userId: { type: String, required: false },
});
export default UserInvite;
