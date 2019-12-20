import React, { Component } from "react";
import Palette from "./Palette";
import { connect } from "react-redux";
import { setPen } from "../actions/setPen";

class PaletteForm extends Component {
  handlePenSelect = penNumber => {
    this.props.setPen(penNumber);
  };

  createPenSelector = () => {
    const array = new Array(5);
    const pens = [];
    for (const [index] of array.entries()) {
      pens.push(
        <li key={index}>
          <Palette id={index + 1} />
          <br />
          <input
            type="radio"
            name="pen"
            id={"pen " + (index + 1)}
            onClick={() => this.handlePenSelect("c" + (index + 1))}
          />
        </li>
      );
    }
    return pens;
  };

  render() {
    return (
      <div>
        <form className="palette-form">
          <ul id="palette">
            <li>
              <Palette id={"background"} />
              <br />
              Select your pen:
            </li>
            {this.createPenSelector()}
          </ul>
        </form>
        <div id="pen" />
      </div>
    );
  }
}

export default connect(null, { setPen })(PaletteForm);
