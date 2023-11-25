export interface ITask {
  id: number;
  text: string;
  isDone: boolean;
  isImportant: boolean;
  deadline: Date | null;
  //isDeadlineExpired(): boolean;
}

export const TASKS: ITask[] = [
  {
    id: 1,
    text: "Go to the GYM",
    isDone: false,
    isImportant: true,
    deadline: null
  },
  {
    id: 2,
    text: "Go to the store",
    isDone: false,
    isImportant: false,
    deadline: new Date("2023-11-11")
  },
  {
    id: 3,
    text: "Go to the GYM",
    isDone: false,
    isImportant: true,
    deadline: new Date("2023-11-10")
  },
  {
    id: 4,
    text: "Go to the GYM",
    isDone: false,
    isImportant: true,
    deadline: new Date("2023-11-10")
  }
]