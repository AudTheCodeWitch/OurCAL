export function fetchBlocks() {
  // Fetch all blocks from db
  return dispatch => {
    // fetch("http://localhost:3000/api/blocks", {
    fetch("/blocks")
      .then(resp => resp.json())
      .then(blocks =>
        dispatch({
          type: "FETCH_BLOCKS",
          payload: blocks.data
        })
      );
  };
}