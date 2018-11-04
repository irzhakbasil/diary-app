import React from "react";
import CommentsList from "./CommentsList/CommentsList";
import CommentInput from "./CommentInput/CommentInput";

const commemts = props => {
  return (
    <div className="comments">
      <h1>Comments</h1>
      <CommentsList selectedEntry={props.selectedEntry} />
      <CommentInput
        commentInputHandler={props.commentInputHandler}
        postCommentClick={props.postCommentClick}
        commentInput={props.commentInput}
      />
    </div>
  );
};

export default commemts;
