const form = document.querySelector('.block-form');

const radioButtons = document.getElementsByName('difficulty');
const pixels = document.getElementsByClassName('pixel');
const getDifficulty = function() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
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
        let block = new Block(name, pixels, difficulty);
        let blockData = {
            block,
            difficulty: difficulty,
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
                blockTemplate.innerHTML = '';
                form.reset();
                createBlankBlock()
                // createBlockCard(object)
            })
            .catch(function (error) {
                alert("Yarn Barf!");
                console.log(error.message)
            })
    }
});