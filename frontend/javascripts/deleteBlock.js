const deleteBlock = function(block) {
    const blockId = block.split('-')[0];
    console.log(`Delete block`);
    const blockURL = `http://localhost:3000/api/blocks/${blockId}`;

    let configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(blockId)
    };

    fetch(blockURL, configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            const card = document.getElementById(`${block}`);
            card.parentNode.removeChild(card)
            // const ul = document.getElementById(`${trainerId}-pokes`);
            // ul.removeChild(li)
        })
        .catch(function (error) {
            alert(`Skipped a stitch! Error: ${error.message}`);
        });
};
