import React from "react";

const entriesList = props => {
  const hStyle = {
    color: "#ccc"
  };
  let list = [];
  list = props.entries.map((entry, index) => {
    let listClass = "";
    entry.active ? (listClass = "list-item active") : (listClass = "list-item");
    return (
      <li key={index} className={listClass}>
        <div className="list-selected" />
        <p onClick={() => props.selectItem(index)} className="list-item-name">
          {entry.title}
          <span className="comments-count">{entry.comments.length}</span>
        </p>
        <button
          key={index}
          onClick={() => props.deleteEntryHandler(index)}
          className="btn-danger"
        >
          Delete
        </button>
        <p className="list-stem-date">{entry.date}</p>
      </li>
    );
  });

  if (props.entries.length === 0) {
    list = (
      <div>
        <h2 style={hStyle}>Start Adding Your Records</h2>
      </div>
    );
  }
  return <ul className="list">{list}</ul>;
};

export default entriesList;
