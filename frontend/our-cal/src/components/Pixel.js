import React, { Component } from "react";
import { connect } from "react-redux";
import { addPixel } from "../actions/addPixel";
import { colorPixel } from "../actions/colorPixel";

class Pixel extends Component {
  handleClick = (pen, event) => {
    if (pen === "") {
      alert("Please select a pen first!");
    } else {
      let pixel = event.target;
      let color;

      if (pixel.className === `pixel ${pen}`) {
        pixel.className = `pixel bg`;
        color = this.props.colors.bg;
      } else {
        pixel.className = `pixel ${pen}`;
        color = this.props.colors[pen];
      }
      pixel.style.backgroundColor = color;
      this.props.colorPixel(pixel.id.split("-")[1], pen, color);
    }
  };

  componentDidMount() {
    let x = this.props.column + 1;
    let y = 25 - this.props.row;
    let pixel = {
      x: x,
      y: y,
      color: this.props.colors.bg,
      color_variable: "bg"
    };
    if (this.props.location === "Template") {
      //    add pixel to store
      this.props.addPixel(pixel);
    }
  }

  render() {
    const { location, column, row, pen, colors, color } = this.props;
    if (location === "Template") {
      return (
        <div
          className={"pixel bg"}
          id={location + "-" + (column + 1) + ", " + (25 - row)}
          style={{ backgroundColor: colors[`${color}`] }}
          onClick={event => {
            this.handleClick(pen, event);
          }}
        />
      );
    } else {
      return (
        <div
          className="pixel bg"
          id={location + "-" + (column + 1) + "," + (25 - row)}
        />
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  const pixel = state.blockTemplate.blockTemplate.find(
    p => p.x === props.column + 1 && p.y === 25 - props.row
  );
  let color_variable = "bg";
  if (pixel) {
    color_variable = pixel.color_variable;
  }
  return {
    colors: state.palette.colors,
    pen: state.palette.pen,
    color: color_variable
  };
};

export default connect(mapStateToProps, { addPixel, colorPixel })(Pixel);
