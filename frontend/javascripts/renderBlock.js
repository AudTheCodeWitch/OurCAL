const colorPixels = function(blank, pixels) {
    for (let p of pixels) {
        let box = document.getElementById(`${blank.id}-${p.x},${p.y}`);
        box.style.backgroundColor = p.color;
    }
};

const renderBlocks = function() {
    fetch('http://localhost:3000/api/blocks')
        .then(function (response) {
            return response.json();
        })
        .then(function(object) {
            for (const block of object.data) {
                console.log(block);
                createBlockCard(block, object)
            }
        })
};

const createBlockCard = function(block) {
    const container = document.querySelector('.cards');
    const div = document.createElement('div');
    div.className = 'card';
    container.appendChild(div);

    // delete button
    const del = document.createElement('button');
    del.className=`far fa-times-circle`;
    div.appendChild(del);
    // <h6>Block Name</h6>
    const h = document.createElement('h4');
    const name = document.createTextNode(block.attributes.name);
    h.appendChild(name);
    div.appendChild(h);

    // <block div>
    const bl = document.createElement('div');
    bl.className='block';
    bl.id = block.attributes.name;
    createBlankBlock(bl);
    let pixels = block.attributes.pixels;
    div.appendChild(bl);
    colorPixels(bl, pixels);

    // <ul>Block details
    const ul = document.createElement('ul');

    // <li>difficulty
    let li = document.createElement('li');
    const diff = document.createTextNode(`${block.attributes.difficulty.rating}`);
    li.appendChild(diff);
    ul.appendChild(li);
    // <li>username
    li = document.createElement('li');
    const user = document.createTextNode(`Designer: ${block.attributes.user.username}`);
    li.appendChild(user);
    ul.appendChild(li);
    div.appendChild(ul);

    div.id = `${block.id}-${block.attributes.name}`;

    // Add event listeners
    del.addEventListener("mouseover", function (e) {
        del.style.color = 'red';
        del.style.cursor = 'pointer';
    });

    del.addEventListener("mouseout", function (e) {
        del.style.color = 'black';
        del.style.cursor = 'auto';
    });

    del.addEventListener("click", function (e) {
        const block = e.target.parentElement.id;
        deleteBlock(block)
    });


};
renderBlocks();
