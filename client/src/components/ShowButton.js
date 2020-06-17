import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// Functional component

const ShowButton = () => {
  return (
    <button className="viewButton">
      <FontAwesomeIcon icon={faEye} /> View Larger
    </button>
  );
};

export default ShowButton;
