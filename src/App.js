import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Axi from "./hoc/Axi/Axi";

class App extends Component {
  render() {
    return (
      <Axi>
        <Layout />
      </Axi>
    );
  }
}

export default App;
