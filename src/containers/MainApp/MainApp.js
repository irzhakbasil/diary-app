import React, { Component } from "react";
import Entries from "../../components/Entries/Entries";
import Comments from "../../components/Comments/Comments";

export default class MainApp extends Component {
  state = {
    entriesInput: "",
    commentInput: "",
    entries: JSON.parse(localStorage.getItem("entries")),
    selectedEntry: null,
    selectedEntryIndex: null
  };
  entriesInputHandler = e => {
    const input = e.target.value;
    this.setState({
      entriesInput: input
    });
  };
  commentInputHandler = e => {
    const input = e.target.value;
    this.setState({
      commentInput: input
    });
  };
  entriesButtonClickHandler = () => {
    let title = this.state.entriesInput;
    if (title.length === 0) title = "Untitled";
    const date = new Date().toLocaleString();
    let newEntries = this.state.entries.slice(0);
    newEntries.unshift({
      title: title,
      date: date,
      comments: [],
      active: true
    });
    let updatedEntries = newEntries.map((entry, index) => {
      if (index !== 0) entry.active = false;
      return entry;
    });
    this.setState({
      entries: updatedEntries,
      entriesInput: "",
      selectedEntry: updatedEntries[0],
      selectedEntryIndex: 0
    });
    this.saveToLocal(newEntries);
  };

  deleteEntryHandler = index => {
    const newEntries = this.state.entries;
    newEntries.splice(index, 1);
    this.setState({
      selectedEntryIndex: index,
      entries: newEntries
    });
    let updatedSelectedEntryIndex = null;
    this.state.entries.map((entry, index) => {
      if (entry.active === true) updatedSelectedEntryIndex = index;
      return 0;
    });
    this.setState({
      selectedEntryIndex: updatedSelectedEntryIndex
    });
    if (newEntries.length === 0 || this.state.selectedEntryIndex === index) {
      this.setState({
        selectedEntry: null
      });
    }
    this.saveToLocal(newEntries);
  };

  selectItemHandler = index => {
    const selectedEntry = this.state.entries[index];
    let updatedEntries = this.state.entries.map((entry, i) => {
      i === index ? (entry.active = true) : (entry.active = false);
      return entry;
    });
    this.setState({
      entries: updatedEntries,
      selectedEntry: selectedEntry,
      selectedEntryIndex: index
    });
    this.saveToLocal(updatedEntries);
  };

  postCommentHandler = () => {
    let input = this.state.commentInput;
    let updatedEntries = this.state.entries.splice(0);
    updatedEntries.map((entry, index) => {
      if (index === this.state.selectedEntryIndex) {
        entry.comments.unshift(input);
      }
      return 0;
    });
    this.setState({
      entries: updatedEntries,
      commentInput: ""
    });
  };

  saveToLocal = entry => {
    localStorage.setItem("entries", JSON.stringify(entry));
  };
  render() {
    return (
      <div className="content">
        <Entries
          inputHandler={e => this.entriesInputHandler(e)}
          buttonClickHandler={this.entriesButtonClickHandler}
          entries={this.state.entries}
          entriesInput={this.state.entriesInput}
          deleteEntryHandler={this.deleteEntryHandler}
          selectItem={this.selectItemHandler}
          selectedEntryIndex={this.selectedEntryIndex}
        />
        <Comments
          commentInput={this.state.commentInput}
          commentInputHandler={e => this.commentInputHandler(e)}
          selectedEntry={this.state.selectedEntry}
          postCommentClick={this.postCommentHandler}
        />
      </div>
    );
  }
}
