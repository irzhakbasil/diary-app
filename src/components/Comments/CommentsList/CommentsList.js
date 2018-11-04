import React from "react";

const commentsList = props => {
  const emptyStyle = {
    color: "#ccc",
    margin: "0"
  };
  let baseClass = "color-box";
  let optionalClassOrange = "orange";
  let optionalClassblue = "blue";

  let list = <h2 style={emptyStyle}>Nothing here yet</h2>;
  if (props.selectedEntry && props.selectedEntry.comments.length !== 0) {
    list = props.selectedEntry.comments.map((comment, index) => {
      let boxClass = "";
      index % 2 === 0
        ? (boxClass = baseClass + " " + optionalClassOrange)
        : (boxClass = baseClass + " " + optionalClassblue);
      return (
        <div key={index} className="comment-list-item">
          <div className={boxClass} />
          <div className="comment">
            <p>{comment}</p>
          </div>
        </div>
      );
    });
  }

  return <div className="comment-list">{list}</div>;
};

export default commentsList;
