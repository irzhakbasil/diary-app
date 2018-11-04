import React from "react";

const commentInput = props => {
  return (
    <div className="input">
      <div className="color-box grey" />
      <div className="input-holder">
        <textarea
          onChange={props.commentInputHandler}
          name="input-text"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your comment"
          value={props.commentInput}
        />
      </div>
      <div className="comment-button-holder">
        <button className="comment-button" onClick={props.postCommentClick}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default commentInput;
