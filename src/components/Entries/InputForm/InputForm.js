import React from "react";

const inputForm = props => {
  return (
    <div className="input">
      <input
        onChange={props.inputHandler}
        type="text"
        placeholder="Type name here..."
        value={props.entriesInput}
      />
      <button onClick={props.buttonClickHandler}>Add new</button>
    </div>
  );
};

export default inputForm;
