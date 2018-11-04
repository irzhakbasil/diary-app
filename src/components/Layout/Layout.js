import React from "react";
import Axi from "../../hoc/Axi/Axi";
import Navigation from "../Navigation/Navigation";
import MainApp from "../../containers/MainApp/MainApp";

const layout = props => {
  return (
    <Axi>
      <Navigation />
      <MainApp />
    </Axi>
  );
};

export default layout;
