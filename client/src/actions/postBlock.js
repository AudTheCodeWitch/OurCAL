import { createBlock } from "./createBlock";

// Posts block to db

export function postBlock(details, block) {
  console.log(details);

  let blockData = {
    // Format data to send to database
    block: {
      name: details.blockName,
      pixels_attributes: block
    },
    difficulty: details.difficulty,
    user: {
      email: details.email,
      username: details.username
    }
  };
  console.log(blockData);

  return dispatch =>
    fetch("/api/blocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(blockData)
    })
      .then(r => r.json())
      .then(block => {
        // Take returned block data from db and use it to add block to store
        dispatch(createBlock(block));
      });
}
