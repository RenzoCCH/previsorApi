export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  last20quiz?: string[];
  dateCreated?: Date;
  dateUpdated?: Date;
  isAnonymous?: boolean;
}
