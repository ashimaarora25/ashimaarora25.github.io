let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = Number(document.getElementById('second').textContent);
let highScore = Number(document.getElementById('third').textContent);
let userInputs = [];

const displaymsg = function (message) {
    document.getElementById('first').textContent = message;
}


document.getElementById('btn2').addEventListener("click", function () {
    const userInput = Number(document.querySelector('.text').value);
        userInputs.push(userInput);

    if (isNaN(userInput) || (userInput < 0) || (userInput > 100)) {
        if (document.getElementById('first')) {
            displaymsg('⛔ Invalid Input');

        }
    }
    else if (!userInput) {
        displaymsg('⛔ No number');
    }

    else if (userInput !== secretNumber && (score >= 1)) {
        score = score - 1;
        document.getElementById('second').textContent = score;
        if (score === 0) {
            if (document.getElementById('first')) {
                displaymsg('⌛ Game Over');

            }
        }

        else if (userInput > secretNumber) {
            displaymsg('⬇️ Try a Lower Number');

        }
        else if (userInput < secretNumber) {
            displaymsg('⬆️ Try a Higher Number');

        }
    }
    else if (userInput === secretNumber) {
        displaymsg('🎉 Correct Number');
        document.getElementById('qmark').textContent = secretNumber;
        document.getElementById('qmark').style.backgroundColor = 'pink';
        document.getElementById('third').textContent = score;
        document.getElementById('bod').style.background = 'linear-gradient(to top right, green, lightblue)';

    }
});

document.getElementById('btn1').addEventListener('click', function () {
    document.getElementById('first').textContent = 'Start guessing...'
    document.getElementById('second').textContent = '10';
    document.getElementById('qmark').textContent = '?';
   

    secretNumber = Math.trunc(Math.random() * 100) + 1;
    score=10;

    document.getElementById('qmark').style.backgroundColor = 'white';

    document.getElementById('bod').style.background = 'linear-gradient(to top right, purple, lightyellow)';
       document.querySelector('.text').value = "";
    if (score > highScore) {
        document.getElementById('third').value = highScore;
    }
     userInputs.splice(0, userInputs.length);
    document.getElementById('prev').textContent = userInputs;

});


