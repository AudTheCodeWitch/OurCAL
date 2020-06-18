import React from "react";
import CardContainer from "./CardContainer";
import ShowBlockContainer from "./ShowBlockContainer";
import { connect } from "react-redux";

class ShowContainer extends React.Component {
  render() {
    return (
      <div className="Home">
        {/* Render block and details */}
        <ShowBlockContainer id={this.props.id} />
        <br />
        {/* Render cards from db */}
        <CardContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { id: props.match.params.id };
};

export default connect(mapStateToProps)(ShowContainer);
