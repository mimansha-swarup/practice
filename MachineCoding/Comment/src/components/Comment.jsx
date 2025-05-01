import { useState } from "react";
import ReplyBox from "./ReplyBox";
const Comment = ({ commentRecord, addComentById }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = () => {
    setShowReplyBox(!showReplyBox);
  };
  return (
    <div className="comment">
      <p className="user">{commentRecord?.user}</p>
      <p>{commentRecord?.comment}</p>

      <button className="reply" onClick={toggleReplyBox}>
        Reply
      </button>

      {showReplyBox && (
        <ReplyBox onComment={addComentById(commentRecord?.id)} />
      )}
    </div>
  );
};

export default Comment;
