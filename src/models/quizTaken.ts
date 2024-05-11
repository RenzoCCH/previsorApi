import { Schema, model } from "mongoose";
import { QuizTaken } from "../types/quiz/quizTaken";
import { StudenStatus } from "../types/enum";
import Question from "./question";

const quizTaken = new Schema<QuizTaken>(
  {
    _id: String,
    name: String,
    lastName: String,
    questions: [Question],
    score: Number,
    email: String,
    studentStatus: {
      type: String,
      required: true,
      enum: [
        StudenStatus.DISCONNECTED,
        StudenStatus.FINISHED,
        StudenStatus.NEW,
        StudenStatus.PROGRESS,
      ],
      default: StudenStatus.NEW,
    },
    quizId: { type: String, required: true },
    studentId: Number,
    live: Boolean,
    total: Number,
    currentQuestion: { type: Number, required: true, default: 0 },
    dateStarted: Date,
    dateFinished: Date,
    relativeTotal: Number,
    relativeScore: Number,
    duration: Number,
    title: String,
    language: {
      type: String,
      required: true,
      default: "en",
      enum: ["es", "en"],
    },
  },
  { timestamps: true }
);

const QuizTaken = model<QuizTaken>("QuizTaken", quizTaken);
export default QuizTaken;
