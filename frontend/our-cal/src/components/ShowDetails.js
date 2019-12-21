import React from "react";

const ShowDetails = props => {
  return (
    <div className="block-details">
      <h3>Designed by: {props.username}</h3>
      <h3>Difficulty: {props.difficulty}</h3>
    </div>
  );
};

export default ShowDetails;
