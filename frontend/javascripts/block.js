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
            pixel.className = 'pixel';
            pixel.id = `pixel-${noCols}`;
            pixel.addEventListener("click", function() {
                setPixelColor(pixel)
            });
            row.appendChild(pixel);
        }
        block.appendChild(row)
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