import React from "react";
import Pixel from "./Pixel";

// Functional component - Create a 25x25 block of blank pixels

const BlankBlock = () => {
  const createColumns = row => {
    // Create 25 column divs
    const columns = new Array(25);
    const items = [];
    for (const [index] of columns.entries()) {
      let p = (
        <Pixel key={index} row={row} column={index} location="Template" />
      );
      items.push(p);
    }
    return items;
  };

  const createBlock = () => {
    // Create 25 row divs
    const rows = new Array(25);
    const items = [];
    for (const [index] of rows.entries()) {
      items.push(
        <div key={index} className="row" id={"row-" + (index + 1)}>
          {createColumns(index)}
        </div>
      );
    }
    return items;
  };

  return <div className="template block">{createBlock()}</div>;
};

export default BlankBlock;
