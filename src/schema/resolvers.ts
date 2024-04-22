import { createQuizResolver } from "./quizSchema/QuizResolver";
import quizTakenResolver, {
  dateCreated,
} from "./quizTakenSchema/QuiztakenResolver";

export const resolvers = {
  Query: {
    quizTaken: quizTakenResolver,
  },
  Mutation: {
    createQuiz: createQuizResolver,
  },
  QuizTaken: {
    dateCreated,
  },
};
