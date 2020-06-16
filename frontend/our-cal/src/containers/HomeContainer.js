import React from "react";
import NewBlockContainer from "./NewBlockContainer";
import CardContainer from "./CardContainer";

// Home page - blank block template and cards of completed blocks

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
