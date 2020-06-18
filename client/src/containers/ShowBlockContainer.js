import React, { Component } from "react";
import { connect } from "react-redux";
import ShowHeader from "../components/ShowHeader";
import ShowBlock from "../components/ShowBlock";
import ShowDetails from "../components/ShowDetails";

class ShowBlockContainer extends Component {
  render() {
    let block = this.props.block;
    if (block !== undefined) {
      return (
        <div className="block-container">
          <ShowHeader name={block.attributes.name} />
          <ShowBlock block={block.attributes} />
          <ShowDetails
            username={block.attributes.user.username}
            difficulty={block.attributes.difficulty.rating}
          />
        </div>
      );
    } else {
      return <h2>Your block is loading.</h2>;
    }
  }
}

const mapStateToProps = (state, props) => {
  let block = state.cards.all.find(b => b.id === props.id);
  return { block: block };
};

export default connect(mapStateToProps)(ShowBlockContainer);
