import { useState } from "react";
import NestedComments from "./components/NesetedComments";
import ReplyBox from "./components/ReplyBox";
import { INITIAL_COMMENT } from "./constant";
import "./styles.css";
import { createCommnet, updateCommentList } from "./utils";

export default function App() {
  const [postComment, setPostComment] = useState(INITIAL_COMMENT);

  const handleCommentSubmit = (id) => (content) => {
    if (!content) return;
    if (!id) {
      setPostComment((prevCmnt) => [createCommnet(content), ...prevCmnt]);
      return;
    }
    setPostComment((prevCmnt) => {
      const a = updateCommentList(id, prevCmnt, content);
      console.log("a", a);
      return a;
    });
  };

  return (
    <div className="App">
      <h1>Hello Comment</h1>
      <ReplyBox onComment={handleCommentSubmit("")} />

      <NestedComments
        commentList={postComment}
        addComentById={handleCommentSubmit}
      />
    </div>
  );
}
