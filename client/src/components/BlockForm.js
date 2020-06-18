import React, { Component } from "react";
import { connect } from "react-redux";
import { postBlock } from "../actions/postBlock";
import { clearBlock } from "../actions/clearBlock";

// Class component - form for block details

class BlockForm extends Component {
  // Set local state
  constructor() {
    super();
    this.state = {
      blockName: "",
      difficulty: "",
      username: "",
      email: ""
    };
  }

  handleChange = event => {
    // Update local state on change
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    // Submit form - update store
    event.preventDefault();
    const duplicate = document.getElementById(this.state.blockName);
    // Alerts to prevent incomplete data
    if (this.state.blockName === "") {
      return alert("Please name your block");
    } else if (duplicate) {
      return alert("Block name must be unique");
    } else if (this.state.difficulty === "") {
      return alert("Please select a difficulty rating");
    } else if (this.state.username === "") {
      return alert("Please enter your username");
    } else if (this.state.email === "") {
      return alert("Please enter your email");
    } else {
      // Add block to database using postBlock(blockDetails, blockData) action
      this.props.postBlock(this.state, this.props.block);
      // Reset the block template with clearBlock(blockData) action
      this.props.clearBlock(this.props.block);
      // Reset the local state
      this.setState({
        blockName: "",
        difficulty: "",
        username: "",
        email: ""
      });
      alert("Success!");
    }
  };
  render() {
    return (
      <div className="block-details">
        <form
          onSubmit={event => this.handleSubmit(event)}
          className="block-form"
        >
          <h2>Block Details</h2>
          Block name:
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="text"
            name="blockName"
            value={this.state.blockName}
          />
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="radio"
            checked={this.state.difficulty === "Beginner"}
            name="difficulty"
            value="Beginner"
          />
          Beginner
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="radio"
            checked={this.state.difficulty === "Intermediate"}
            name="difficulty"
            value="Intermediate"
          />
          Intermediate
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="radio"
            checked={this.state.difficulty === "Advanced"}
            name="difficulty"
            value="Advanced"
          />
          Advanced
          <br />
          <br />
          Username:
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="text"
            name="username"
            value={this.state.username}
          />
          <br />
          Email:
          <br />
          <input
            onChange={event => this.handleChange(event)}
            type="email"
            name="email"
            value={this.state.email}
          />
          <br />
          <br />
          <input id="create" type="submit" value="Create Block" />
        </form>
      </div>
    );
  }
}

// Get block data from store
const mapStateToProps = state => {
  return { block: state.blockTemplate.blockTemplate };
};

export default connect(mapStateToProps, { postBlock, clearBlock })(BlockForm);
