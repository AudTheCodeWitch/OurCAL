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

const createPalette = function() {
    const palette = document.getElementById('palette');
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        let text;
        if (i !== 0) {
            text = document.createTextNode(`Color ${i + 1}:`);
        } else {
            text = document.createTextNode(`Background Color:`);
        }
        const colorPicker = document.createElement('button');
        colorPicker.className = `color jscolor`;
        colorPicker.id = `color-${i+1}`;
        colorPicker.style.backgroundColor = 'white';
        li.appendChild(text);
        li.appendChild(document.createElement('br'));
        li.append((colorPicker));
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