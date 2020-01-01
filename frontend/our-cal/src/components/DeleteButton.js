import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

// Functional component - delete button

const DeleteButton = ({ destroyBlock, id }) => {
  const handleDeleteClick = id => {
    destroyBlock(id);
  };

  return (
    <button onClick={e => handleDeleteClick(id)} className="fa-times-circle">
      <FontAwesomeIcon icon={faTimesCircle} />
    </button>
  );
};

export default DeleteButton;
