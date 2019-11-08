const form = document.querySelector('.block-form');

const radioButtons = document.getElementsByName('difficulty');
const pixels = document.getElementsByClassName('pixel');
const getDifficulty = function() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
};

const createPixels = function(pixels) {
    let pixelArray = [];
    for(let p of pixels) {
        let x = p.parentElement.id.split('-')[1];
        let y = p.id.split('-')[1];
        let color = p.style.backgroundColor;
        let color_variable = p.classList[1];
        p = new Pixel(x, y, color, color_variable);
        pixelArray.push(p);
    }
    return pixelArray
};


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = form.querySelector('input[name]').value;
    let difficulty = getDifficulty();
    let username = form.querySelector('input[name="username"]').value;
    let email = form.querySelector('input[name="email"]').value;

    if (name === '') {
        alert('Name must not be blank!')
    } else if (difficulty === '') {
        alert('Please select a difficulty rating!')
    } else if (username === '') {
        alert('Username must not be blank!')
    } else if (email === '') {
        alert('Email must not be blank!')
    } else {
        let blockData = {
            block: new Block(name),
            difficulty: difficulty,
            pixels: createPixels(pixels),
            user: new User(username, email)
        };
        console.log(blockData);
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(blockData)
        };

        fetch('http://localhost:3000/api/blocks', configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                console.log(object);
                createBlockCard(object)
            })
            .catch(function (error) {
                alert("Yarn Barf!");
                console.log(error.message)
            })
    }
});