import React, { Component } from "react";
import { connect } from "react-redux";
import CompleteBlock from "./CompleteBlock";
import { destroyBlock } from "../actions/destroyBlock";
import DeleteButton from "./DeleteButton";
import ShowButton from "./ShowButton";
import {Link} from "react-router-dom";

// Class component - card for completed block

class Card extends Component {
  render() {
    return (
      <div
        className="card"
        id={this.props.block.id + "-" + this.props.block.attributes.name}
      >
        <DeleteButton
          /* Destroy block in db and remove from store */
          destroyBlock={this.props.destroyBlock}
          id={this.props.block.id}
        />

        <h3>{this.props.block.attributes.name}</h3>
        <div className="block">
          {/* Display block */}
          <CompleteBlock block={this.props.block.attributes} />
        </div>
        <ul>
          <li>{this.props.block.attributes.difficulty.rating}</li>
          <li>{this.props.block.attributes.user.username}</li>
          <li>
            {/* Show page for block */}
            <Link to={`/blocks/${this.props.block.id}`}>
              <ShowButton/>
            </Link>
          </li>
        </ul>

      </div>
    );
  }
}

export default connect(null, { destroyBlock })(Card);
