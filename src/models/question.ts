import { Schema } from "mongoose";
import { Question } from "../types/quiz/question";
import { QuestionStatus, QuestionType } from "../types/enum";
import Option from "./option";
const Question = new Schema<Question>({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  isCorrect: Boolean,
  points: Number,
  progress: Number,
  time: Number,
  status: {
    type: String,
    required: false,
    enum: [
      QuestionStatus.NOT_VIEWED,
      QuestionStatus.SKIPPED,
      QuestionStatus.VIEWED,
    ],
    default: QuestionStatus.NOT_VIEWED,
  },
  required: Boolean,
  score: Number,
  type: {
    type: String,
    required: true,
    enum: [QuestionType.MULTICHOICE, QuestionType.PARAGRAPH],
    default: QuestionType.PARAGRAPH,
  },
  response: String,
  options: [Option],
});
export default Question;
