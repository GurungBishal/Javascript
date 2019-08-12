/*
GAME FUNCTION :
-Player must guess a number between min and max.
-Player gets a certain amount of guesses.
-Notify player of guesses remaining
-Notify the player of correct answer if loose.
-Let player to choose again.


*/

//Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }

})

//Listen for guess

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate 
    if (isNaN(guess) || guess < min || guess > max) {
        setMesage(`Please enter a number between ${min} and ${max}`, 'green');
    }

    //Check if won
    if (guess === winningNum) {
        // //Game won

        // //Disable the input
        // guessInput.disabled = true;

        // //Change border color
        // guessInput.style.borderColor = 'green';

        // setMesage(`${winningNum} is correct, YOU WIN !!`, 'green');

        gameOver(true, `${winningNum} is correct. YOU WIN !!`);
    } else {
        //Wrong Number

        guessesLeft -= 1;
        // guessesLeft = guessesLeft -1;

        if (guessesLeft === 0) {
            // //game Over
            // //Disable the input
            // guessInput.disabled = true;

            // //Change border color
            // guessInput.style.borderColor = 'red';

            // setMesage(`Game Over, YOU LOST, The correct number was ${winningNum}`, 'red');

            gameOver(false, `YOU LOST. The correct number was ${winningNum}`)

        } else {
            //Game continues - answer wrong

            //change the border

            guessInput.style.borderColor = 'red';

            //clear the input
            guessInput.value = '';

            setMesage(`${guess} isnot correct!!, ${guessesLeft} guessleft`, 'red');
        }

    }
});

//Game Over

function gameOver(won, text) {
    //Game won
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable the input
    guessInput.disabled = true;

    //Change border color
    guessInput.style.borderColor = color;

    setMesage(text, color);

    //Play Again ?

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winnig Num
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMesage(text, color) {
    message.style.color = color;
    message.textContent = text;
}


