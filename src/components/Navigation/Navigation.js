import React from "react";
import VectorBook from "../../../src/Vector_Book_blue.svg.png";
import drunkCrab from "./dccLogo1.png";

const navigation = () => {
  return (
    <div className="nav">
      <h1>DIARY APP</h1>
      <p>A place for your memories</p>
      <img src={VectorBook} alt="Dairy" />
      <div className="developerLogo-container">
        <img className="developerLogo" src={drunkCrab} alt="" />
      </div>
    </div>
  );
};

export default navigation;
