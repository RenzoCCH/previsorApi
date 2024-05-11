import { Schema } from "mongoose";
import { UserInvite } from "../types/quiz/userInvite";

const UserInvite = new Schema<UserInvite>({
  quizTakenId: { type: String, required: false },
  userMail: { type: String, required: false },
  userId: { type: String, required: false },
});
export default UserInvite;
