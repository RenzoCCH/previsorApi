import { createQuizResolver } from "./quizSchema/QuizResolver";
import quizTakenResolver, {
  createdAt,
} from "./quizTakenSchema/QuiztakenResolver";

export const resolvers = {
  Query: {
    quizTaken: quizTakenResolver,
  },
  Mutation: {
    createQuiz: createQuizResolver,
  },
  QuizTaken: {
    createdAt,
  },
};
