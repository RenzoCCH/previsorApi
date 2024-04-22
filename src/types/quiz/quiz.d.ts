export interface Quiz {
  id: string;
  title: string;
  quizStatus: QuizStatus;
  dateCreated?: Date;
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
  students?: User[];
  dateUpdated?: Date;
  dateFinalized?: Date;
  duration?: number;
}
