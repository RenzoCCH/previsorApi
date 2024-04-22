import QuizTaken from "../../models/quizTaken";
import { QuestionStatus, QuestionType, StudenStatus } from "../../types/enum";
import { QuestionMultichoice } from "../../types/quiz/question";
import { QuizTaken as QuizTakenType } from "../../types/quiz/quizTaken";
type quizTakenArgs = {
  id: string;
};
// @ts-expect-error _first argument not used
const quizTakenResolver = async (_, args: quizTakenArgs) => {
  console.log("args", args);
  // ask if a quiz exists, we need the token of the quiz
  const quiz: QuizTakenType = {
    id: args.id,
    name: "Renzo Antonio",
    lastName: "Calla Chavez",
    questions: [
      {
        id: 1,
        type: QuestionType.PARAGRAPH,
        question: "this is the first quesiton?",
        response: "response laksjdfl",
        points: 1,
        status: QuestionStatus.NOT_VIEWED,
        required: true,
      },
      {
        id: 2,
        type: QuestionType.MULTICHOICE,
        question: "this is the second question?",
        options: [
          {
            id: 11,
            option: "This is the first option",
            isCorrect: false,
            checked: false,
          },
          {
            id: 12,
            option: "This is the thids optoin",
            isCorrect: true,
            checked: false,
          },
          {
            id: 13,
            option: "This is the fourth option",
            isCorrect: false,
            checked: false,
          },
        ],
        points: 1,
        status: QuestionStatus.NOT_VIEWED,
        required: false,
      },
      {
        id: 3,
        type: QuestionType.PARAGRAPH,
        question: "This is the htird question?",
        points: 1,
        status: QuestionStatus.NOT_VIEWED,
        required: false,
      } as QuestionMultichoice,
    ],
    score: 0,
    email: "renzocallachavez@gmail.com",
    studentStatus: StudenStatus.NEW,
    quizId: 0,
    studentId: 0,
    live: false,
    total: 0,
    currentQuestion: 0,
    dateStarted: null,
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateFinished: null,
    relativeTotal: null,
    relativeScore: null,
    duration: null,
    title: "this Test title",
    language: "en",
  };
  // create a quiz based on this existing quiz
  const qTaken = new QuizTaken(quiz);
  await qTaken.save();

  // throw new GraphQLError("No Quiz found with id " + args.id, {
  //   extensions: {
  //     code: "NOT_FOUND",
  //   },
  // });

  return quiz;
};

export const dateCreated = (date: QuizTakenType) => {
  console.log("this is the date", date.dateCreated);
  if (date.dateCreated) {
    return date.dateCreated.toISOString();
  }
  return date.dateCreated;
};

export default quizTakenResolver;
