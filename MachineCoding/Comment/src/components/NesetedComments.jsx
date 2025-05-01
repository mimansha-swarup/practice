import Comment from "./Comment";

const NestedComments = ({ commentList, addComentById }) => {
  return (
    <div className="nested-comment">
      {commentList?.map((comment) => {
        return (
          <>
            <Comment commentRecord={comment} addComentById={addComentById} />

            {!!comment?.subComment?.length && (
              <NestedComments
                commentList={comment?.subComment}
                addComentById={addComentById}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default NestedComments;
