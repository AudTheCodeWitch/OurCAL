const block = document.getElementById('block');
const createBlock = function () {
    let noRows;
    for (noRows = 1; noRows < 26; noRows++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${noRows}`;
        let noCols;
        for (noCols = 1; noCols < 26; noCols++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel bg';
            pixel.id = `pixel-${noCols}`;
            pixel.addEventListener("click", function() {
                setPixelColor(pixel)
            });
            row.appendChild(pixel);
        }
        block.appendChild(row)
    }
};

const createColorButton = function(i) {
    const colorPicker = document.createElement('button');
    colorPicker.className = `color jscolor`;
    if (i) {
        colorPicker.id = `c${i + 1}`;
    } else {
        colorPicker.id = `bg`
    }
    colorPicker.style.backgroundColor = 'white';
    return colorPicker
};

const createPalette = function() {
    const palette = document.getElementById('palette');
    const bgLi = document.createElement('li');
    const bgText = document.createTextNode(`Background Color:`);
    bgLi.appendChild(bgText);
    bgLi.appendChild(document.createElement('br'));
    bgLi.appendChild(createColorButton());
    palette.appendChild(bgLi);

    for (let i = 1; i < 5; i++) {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'pen');
        radio.id=`pen-${i+1}`;
        let text = document.createTextNode(`Color ${i + 1}:`);
        li.appendChild(text);
        li.appendChild(document.createElement('br'));
        li.appendChild(createColorButton(i));
        li.appendChild(document.createElement('br'));
        li.appendChild(radio);
        palette.appendChild(li);
    }
};

const setPixelColor = function(pixel) {
    if (pixel.style.backgroundColor === 'white') {
        pixel.style.backgroundColor = 'black'
    } else {
        pixel.style.backgroundColor = 'white'
    }
};

createBlock();
createPalette();