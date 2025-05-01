import { useState } from "react";

const ReplyBox = ({ onComment }) => {
  const [commentContent, setCommentContent] = useState("");
  const onChange = (e) => setCommentContent(e.target.value);

  const handleCommentChange = () => {
    onComment(commentContent);
    setCommentContent("");
  };

  return (
    <div className="comment-input">
      <textarea value={commentContent} onChange={onChange} />
      <button onClick={handleCommentChange}> Addd</button>
    </div>
  );
};

export default ReplyBox;
