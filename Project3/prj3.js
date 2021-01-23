const displaymsg = function (message) {
    document.querySelector('.para').textContent = message;
}
document.querySelector('.check').addEventListener("click", function () {
    const userInput = Number(document.querySelector('.text').value);

    if (isNaN(userInput)) {
        if (document.getElementById('x')) {
            displaymsg('Invalid Input');

        }
    }




})
