import React from "react";

// Functional component - name of block

const ShowHeader = props => {
  return (
    <div className="block-header">
      <h2>{props.name}</h2>
    </div>
  );
};

export default ShowHeader;
