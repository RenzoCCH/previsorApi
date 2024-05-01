import mongoose from "mongoose";
import Quiz from "../../models/quiz";
import { QuizStatus } from "../../types/enum";
import { Quiz as QuizType } from "../../types/quiz/quiz";
import { validateQuestions } from "../../utils/quizValidation";
type argsType = {
  quiz: QuizType;
};
const quizResolver = () => {};
// @ts-expect-error _first argument not used
export const createQuizResolver = async (_, args: argsType) => {
  const { title, questions, students } = args.quiz;
  const newId = new mongoose.mongo.ObjectId();

  validateQuestions(questions);
  // create the quiz
  const q = new Quiz({
    _id: newId,
    title,
    quizStatus: QuizStatus.CREATED,
    questions,
    students,
  });
  await q.save();

  // automaticId
  return q;
};

export default quizResolver;
