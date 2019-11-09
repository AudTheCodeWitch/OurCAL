const renderBlocks = function() {
    fetch('http://localhost:3000/api/blocks')
        .then(function (response) {
            return response.json();
        })
        .then(function(object) {
            for (const block of object.data) {
                createBlockCard(block, object)
            }
        })
};

const createBlockCard = function(block, object) {
    const container = document.querySelector('.cards');
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('data-id' , block.id);
    container.appendChild(div);

    // <h6>Block Name</h6>
    const h = document.createElement('h6');
    const name = document.createTextNode(block.attributes.name);
    h.appendChild(name);
    div.appendChild(h);

    // <block div>
    const bl = document.createElement('div');
    div.id = `${block.id}-${block.name}`;
    div.appendChild(bl);

    // delete button
};
renderBlocks();
