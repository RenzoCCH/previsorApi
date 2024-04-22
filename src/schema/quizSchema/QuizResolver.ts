import Quiz from "../../models/quiz";
import { QuizStatus } from "../../types/enum";
import { Quiz as QuizType } from "../../types/quiz/quiz";
type argsType = {
  quiz: QuizType;
};
const quizResolver = () => {};
// @ts-expect-error _first argument not used
export const createQuizResolver = async (_, args: argsType) => {
  console.log("this is the quiz creation", args);
  const { title } = args.quiz;
  // create the quiz
  const q = new Quiz({
    title,
    quizStatus: QuizStatus.CREATED,
  });
  await q.save();
  // automaticId
  return args.quiz;
};

export default quizResolver;
