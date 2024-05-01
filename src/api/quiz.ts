import express from "express";
import { QuizTaken } from "../types/quiz/quizTaken";
import { QuestionStatus, QuestionType, StudenStatus } from "../types/enum";
import { QuestionMultichoice, QuestionParagrah } from "../types/quiz/question";

const router = express.Router();

type QuizResponse = {
  message: string;
  quiz: QuizTaken;
};

router.get<object, QuizResponse>("/:quizId", (req, res) => {
  const { quizId } = req.params as { quizId: string };

  const quiz: QuizTaken = {
    id: quizId,
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
        question: "this is the third quesiton?",
        response: "response laksjdfl",
        points: 1,
        status: QuestionStatus.NOT_VIEWED,
        required: false,
      } as QuestionParagrah,
      {
        id: 4,
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
    createdAt: new Date(),
    updatedAt: new Date(),
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
