import { GraphQLError } from "graphql";
import { Question, QuestionMultichoice } from "../types/quiz/question";
import { QuestionType } from "../types/enum";

export const validateQuestions = (questions: Question[]) => {
  if (!questions.length) {
    throw new GraphQLError("The Quiz requires at least one question.", {
      extensions: {
        code: "BAD_REQUEST",
      },
    });
  }

  for (const question of questions) {
    if ((!question.id && question.id !== 0) || isNaN(question.id)) {
      throw new GraphQLError("Every Question requires a unique numeric Id.", {
        extensions: {
          code: "BAD_REQUEST",
        },
      });
    }
    if (isMultichoiceQuestion(question)) {
      if (!question.options) {
        throw new GraphQLError(
          `Question with id ${question.id} requires at least one option`,
          {
            extensions: {
              code: "BAD_REQUEST",
            },
          },
        );
      }
    }
  }
};

export function isMultichoiceQuestion(q: Question): q is QuestionMultichoice {
  return q.type === QuestionType.MULTICHOICE;
}
