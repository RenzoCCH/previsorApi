import { Schema, model } from "mongoose";
import { Quiz as QuizType } from "../types/quiz/quiz";
import { QuizStatus } from "../types/enum";
import Question from "./question";
import User from "./user";

const quiz = new Schema<QuizType>(
  {
    title: String,
    quizStatus: {
      type: String,
      required: true,
      enum: [
        QuizStatus.CREATED,
        QuizStatus.DRAFT,
        QuizStatus.FINISHED,
        QuizStatus.STARTED,
        QuizStatus.TO_QUALIFY,
      ],
    },
    questions: [Question],
    classId: String,
    registrationLink: String,
    professor: User,
    time: Number,
    dateStarted: Date,
    generalProgress: Number,
    generalScore: Number,
    className: String,
    total: Number,
    relativeTotal: Number,
    students: [{ type: User, required: false }],
    dateFinalized: Date,
    duration: Number,
  },
  { timestamps: true },
);
const Quiz = model<QuizType>("Quiz", quiz);
export default Quiz;
