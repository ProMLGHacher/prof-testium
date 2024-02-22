export type Answer = string;
export type Question = {
  name: string;
  answers: Answer[];
  rightAnswerIndex: number;
};

export type Test = {
  id: string;
  name: string;
  questions: Question[];
};