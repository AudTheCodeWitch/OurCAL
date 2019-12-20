import { createBlock } from "./createBlock";

export function postBlock(details, block) {
  console.log(details);

  let blockData = {
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
    fetch("http://localhost:3000/api/blocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(blockData)
    })
      .then(r => r.json())
      .then(block => {
        dispatch(createBlock(block));
      });
}
