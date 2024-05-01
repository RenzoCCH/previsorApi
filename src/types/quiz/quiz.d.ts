import { UserInvite } from "./userInvite";

export interface Quiz {
  id: string;
  title: string;
  quizStatus: QuizStatus;
  createdAt?: Date;
  questions: Question[];
  classId?: string;
  registrationLink?: string;
  professor?: User;
  time?: number;
  dateStarted?: Date;
  generalProgress?: number;
  generalScore?: number;
  className?: string;
  total?: number;
  relativeTotal?: number;
  students?: UserInvite[];
  updatedAt?: Date;
  dateFinalized?: Date;
  duration?: number;
}
