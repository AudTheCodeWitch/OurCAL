import React from "react";
import NewBlockContainer from "./NewBlockContainer";
import CardContainer from "./CardContainer";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="Home">
        <NewBlockContainer />
        <br />
        <CardContainer />
      </div>
    );
  }
}

export default HomeContainer;
