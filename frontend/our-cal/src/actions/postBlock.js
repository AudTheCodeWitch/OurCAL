import { createBlock } from "./createBlock";

export function postBlock(details, block) {
    console.log(block)
    let blockData = {
        block: {
            name: details.name,
            pixels_attributes: block},
        difficulty: details.difficulty,
        user: {
            email: details.email,
            username: details.username}
        };


    return dispatch =>
        fetch("http://localhost:3000/api/blocks", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(blockData)
        })
            .then(r => r.json())
            .then(block => {
                dispatch(createBlock(block));
            });
}




