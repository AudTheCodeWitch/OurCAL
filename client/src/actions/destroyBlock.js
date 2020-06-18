import { deleteBlock } from "./deleteBlock";

export function destroyBlock(id) {
  return dispatch => {
    fetch(`/api/blocks/${id}`, { method: "DELETE" })
      .then(dispatch(deleteBlock(id))
    );
  };
}