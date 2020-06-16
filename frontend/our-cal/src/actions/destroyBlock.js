import { deleteBlock } from "./deleteBlock";

export function destroyBlock(id) {
  return dispatch => {
    // fetch(`http://localhost:3000/api/blocks/${id}`, { method: "DELETE" })
    fetch(`/blocks/${id}`, { method: "DELETE" })
      .then(dispatch(deleteBlock(id))
    );
  };
}