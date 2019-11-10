const blockTemplate = document.getElementById('Template');
let pen;
const createBlankBlock = function (location) {
    let noRows;
    for (noRows = 1; noRows < 26; noRows++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${noRows}`;
        let noCols;
        for (noCols = 1; noCols < 26; noCols++) {
            const pixel = document.createElement('div');
            if (location.id === 'Template') {
                pixel.className = 'pixel bg';
            } else {
                pixel.className = 'pixel'
            }
            pixel.id = `${location.id}-${noCols},${26-noRows}`;
            pixel.style.backgroundColor = 'rgb(255, 255, 255)';
            pixel.addEventListener("click", function() {
                setPixelColor(pixel)
            });
            row.appendChild(pixel);
        }
        location.appendChild(row)
    }
};

const resetTemplate = function(template) {
    let pixels = template.getElementsByClassName('pixel');
    for(const p of pixels) {
        p.style.backgroundColor = 'rgb(255, 255, 255)';
        p.className = 'pixel bg'
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
        radio.className='pens';
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

const setBlockColors = function() {
    for (let i = 1; i < 6; i++) {
        // Select the node to observe
        let targetNode;
        if(i === 1) {
            targetNode = document.getElementById(`bg`)
        } else {
            targetNode = document.getElementById(`c${i}`);
        }
        // The class we'll watch for
        const className = 'jscolor-active';

        // If the targetNode exists on our page
        if (targetNode) {

            // Observe attributes, specifically the class attribute
            // We don't care about descendant nodes
            var config = {
                attributes: true,
                attributeFilter: ['class'],
                subtree: false
            };

            // When a mutation is observed
            const callback = function (mutationsList) {
                for (const mutation of mutationsList) {
                    // If the classList contains the className we want, go to the cart page
                    if (!mutation.target.classList.contains(className)) {
                    //    iterate through pixels and change colors
                        const pixels = document.getElementsByClassName('pixel')
                        for(let i = 0; i < pixels.length; i++) {
                            const p = pixels[i];
                            if (p.classList.contains(`${mutation.target.id}`)) {
                                p.style.backgroundColor = mutation.target.style.backgroundColor
                            }
                        }
                    }
                }
            };

            // Create an new observer
            const observer = new MutationObserver(callback);

            // Start observing
            observer.observe(targetNode, config);
        }
    }
};

const setPen = function() {
    for(let i = 2; i < 6; i++) {
        const p = document.getElementById(`pen-${i}`);
        p.addEventListener("click", function() {
            pen = p
        });
    }
};

const setPixelColor = function(pixel) {
    if (pen !== undefined) {
        let penColor = pen.parentElement.children[1];
        let background = document.getElementById(`bg`)
        if (pixel.style.backgroundColor !== penColor.style.backgroundColor) {
            pixel.className = `pixel ${penColor.id}`;
            pixel.style.backgroundColor = penColor.style.backgroundColor
        } else {
            pixel.style.backgroundColor = background.style.backgroundColor
            pixel.className = 'pixel bg'
        }
    } else {
        alert('Please select a color')
    }
};

createPalette();

document.addEventListener('DOMContentLoaded', () => {
    createBlankBlock(blockTemplate);
    setBlockColors();
    setPen();
    console.log('content loaded')
});