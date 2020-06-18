export function fetchBlocks() {
  // Fetch all blocks from db
  return dispatch => {
    fetch("/api/blocks")
      .then(resp => resp.json())
      .then(blocks =>
        dispatch({
          type: "FETCH_BLOCKS",
          payload: blocks.data
        })
      );
  };
}