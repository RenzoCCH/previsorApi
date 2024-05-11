import { createQuizResolver } from "./quizSchema/QuizResolver";
import quizTakenResolver, {
  createdAt,
  saveAnswerQuizTaken,
  startQuizTaken,
} from "./quizTakenSchema/QuiztakenResolver";

export const resolvers = {
  Query: {
    quizTaken: quizTakenResolver,
  },
  Mutation: {
    createQuiz: createQuizResolver,
    startQuizTaken: startQuizTaken,
    saveAnswerQuizTaken: saveAnswerQuizTaken,
  },
  QuizTaken: {
    createdAt,
  },
};
