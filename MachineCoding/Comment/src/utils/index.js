import { comments, users } from "../constant";

const randomNumberAccToLen = (range) => {
  return Math.floor(Math.random() * range);
};

export const getRandomComment = () => {
  const commentLen = comments.length - 1;

  return comments[randomNumberAccToLen(commentLen)];
};
export const getRandomUser = () => {
  const userLen = users.length - 1;

  return users[randomNumberAccToLen(userLen)];
};

export const createCommnet = (content) => ({
  id: new Date()?.toString(),
  user: "Meow",
  comment: content,
  subComment: [],
});

export const updateCommentList = (id, comments, content) => {
  return comments?.map((comment) => {
    if (comment?.id === id) {
      return {
        ...comment,
        subComment: [createCommnet(content), ...comment?.subComment],
      };
    } else if (!!comment?.subComment?.length) {
      return {
        ...comment,
        subComment: updateCommentList(id, comment?.subComment, content),
      };
    }
    return comment;
  });
};
