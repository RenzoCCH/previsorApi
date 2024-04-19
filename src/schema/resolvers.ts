import { QuestionStatus, QuestionType, StudenStatus } from "../types/enum";
import { QuizTaken } from "../types/quiz/quizTaken";

export const resolvers = {
  Query: {
    quizTaken: () => {
      const quiz: QuizTaken = {
        id: "asdfasduifoiaf",
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
      return quiz;
    },
  },
  QuizTaken: {
    dateCreated: (date: QuizTaken) => {
      console.log("this is the date", date.dateCreated);
      if (date.dateCreated) {
        return date.dateCreated.toISOString();
      }
      return date.dateCreated;
    },
  },
};
