import express from "express";
import { QuizTaken } from "../types/quiz/quizTaken";
import { QuestionStatus, QuestionType, StudenStatus } from "../types/enum";

const router = express.Router();

type QuizResponse = {
  message: string;
  quiz: QuizTaken;
};

router.get<object, QuizResponse>("/", (req, res) => {
  const quiz: QuizTaken = {
    id: 1,
    name: "Renzo Antonio",
    lastName: "Calla Chavez",
    questions: [
      {
        id: 1,
        type: QuestionType.PARAGRAPH,
        question: "this is the first quesiton?",
        points: 1,
        status: QuestionStatus.NOT_VIEWED,
        required: false,
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
            id: 11,
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
      },
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
  // res.status(404);
  // throw new Error('Not found');
  // setTimeout(() => {
  res.json({
    message: "this is the quiz taken lero leross",
    quiz,
  });
  // }, 10000);
});

export default router;
