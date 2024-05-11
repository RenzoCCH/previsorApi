import { GraphQLError } from "graphql";
import Quiz from "../../models/quiz";
import QuizTaken from "../../models/quizTaken";
import { QuizTaken as QuizTakenType } from "../../types/quiz/quizTaken";
import {
  isMultichoiceQuestion,
  validateFinished,
} from "../../utils/quizValidation";
import { QuestionType, StudenStatus } from "../../types/enum";
import { Option } from "../../types/quiz/option";
import { log } from "console";

type quizTakenArgs = {
  id: string;
  quizId: string;
};
// @ts-expect-error _first argument not used
const quizTakenResolver = async (_, { quizId, id }: quizTakenArgs) => {
  let quizTaken = await QuizTaken.findById(id).exec();

  if (quizTaken) {
    return quizTaken;
  }
  const quiz = await Quiz.findById(quizId).exec();
  if (!quiz) {
    throw new GraphQLError("The quiz does not exist.", {
      extensions: {
        code: "BAD_REQUEST",
      },
    });
  }

  validateFinished(quiz);
  const newQuiz: Partial<QuizTakenType> = {
    studentStatus: StudenStatus.NEW,
    quizId,
  };
  if (quiz.questions) newQuiz.questions = quiz.questions;
  if (quiz.title) newQuiz.title = quiz.title;
  quizTaken = new QuizTaken(newQuiz);
  quizTaken._id = id;
  await quizTaken.save();
  return quizTaken;
};
type startQuizArgs = {
  quizTakenId: string;
};
// @ts-expect-error _first argument not used
export const startQuizTaken = async (_, { quizTakenId }: startQuizArgs) => {
  const quizTaken = await QuizTaken.findOneAndUpdate(
    { _id: quizTakenId },
    {
      studentStatus: StudenStatus.PROGRESS,
      dateStarted: new Date(),
    },
    {
      new: true,
    }
  );
  return quizTaken;
};
interface saveAnswer {
  quizTakenId: string;
  questionId: number;
  answer?: string;
  options?: Option[];
  type: QuestionType.PARAGRAPH;
}

export const saveAnswerQuizTaken = async (
  // @ts-expect-error _first argument not used
  _,
  { quizTakenId, questionId, options, answer, type }: saveAnswer
) => {
  console.log("is here??");

  const quizTaken = await QuizTaken.findById(quizTakenId).exec();

  if (!quizTaken) {
    throw new GraphQLError("The quiz does not exist.", {
      extensions: {
        code: "BAD_REQUEST",
      },
    });
  }
  const questionIndex = quizTaken?.questions.findIndex(
    (q) => q.id === questionId
  );
  const question = quizTaken.questions[questionIndex];
  console.log("options", options);

  if (isMultichoiceQuestion(question) && options) {
    question.options = options;
  }
  console.log("this is the question", quizTaken);
};

export const createdAt = (date: QuizTakenType) => {
  // console.log("this is the date", date.dateCreated);
  // if (date.dateCreated) {
  //   return date.dateCreated.toISOString();
  // }
  return date.createdAt;
};

export default quizTakenResolver;
