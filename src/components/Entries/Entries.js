import React from "react";
import InputForm from "./InputForm/InputForm";
import EntriesList from "./EntriesList/EntriesList";

const Entries = props => {
  return (
    <div className="entries">
      <h1>Entries</h1>
      <InputForm
        inputHandler={props.inputHandler}
        buttonClickHandler={props.buttonClickHandler}
        entriesInput={props.entriesInput}
      />
      <EntriesList
        selectItem={props.selectItem}
        deleteEntryHandler={props.deleteEntryHandler}
        entries={props.entries}
        selectedEntryIndex={props.selectedEntryIndex}
      />
    </div>
  );
};

export default Entries;
