import {
  getRandomUser,
  getRandomComment,
} from "../utils";

export const users = ["Ramesh", "Jack", "John", "siddesh", "swati", "mack"];

export const comments = [
  "wow Such a nice post !!",
  "I beg to differ",
  "I have simillar experience",
  "We want you to work with us",
  "will you be my mentor",
  "let's connect",
  "This is awesome",
  "nice going",
];

export const INITIAL_COMMENT = [
  {
    id: "1",
    user: getRandomUser(),
    comment: getRandomComment(),
    subComment: [
      {
        id: "2",
        user: getRandomUser(),
        comment: getRandomComment(),
        subComment: [
          {
            id: "3",
            user: getRandomUser(),
            comment: getRandomComment(),
            subComment: [],
          },
          {
            id: "4",
            user: getRandomUser(),
            comment: getRandomComment(),
            subComment: [],
          },
        ],
      },
      {
        id: "5",
        user: getRandomUser(),
        comment: getRandomComment(),
        subComment: [
          {
            id: "6",
            user: getRandomUser(),
            comment: getRandomComment(),
            subComment: [],
          },
        ],
      },
    ],
  },
  {
    id: "7",
    user: getRandomUser(),
    comment: getRandomComment(),
    subComment: [],
  },
];
