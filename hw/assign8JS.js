//A 

let avgNets = (96 + 108 + 89) / 3;
let avgKnicks = (88 + 91 + 110) / 3;

if (avgNets > avgKnicks) {
    console.log('Nets wins the trophy');
}
else if (avgNets < avgKnicks) {
    console.log('Knicks wins the trophy');
}
else {
    console.log('There is a draw');
}

//BONUS 1: 

avgNets = (97 + 112 + 101) / 3;
avgKnicks = (109 + 95 + 123) / 3;

if ((avgNets > avgKnicks) && (avgNets >= 100)) {
    console.log('Nets wins the trophy');
}

else if ((avgNets < avgKnicks) && (avgKnicks >= 100)) {
    console.log('Knicks wins the trophy');
}

else {
    console.log("There is a draw");
}

//BONUS 2: 
avgNets = (97 + 112 + 101) / 3;
avgKnicks = (109 + 95 + 106) / 3;

if ((avgNets > avgKnicks) && (avgNets >= 100)) {
    console.log('Nets wins the trophy');
}

else if ((avgNets < avgKnicks) && (avgKnicks >= 100)) {
    console.log('Knicks wins the trophy');
}

else if ((avgNets === avgKnicks) && (avgNets >= 100)) {
    console.log("There is a draw");
}

//B

let tip = 0;
//Test data 1: 
let testData = [275, 28, 430];
let bill = 0;
for (let i = 0; i < 3; i++) {
    bill = testData[i];


    let check = ((bill >= 30) && (bill <= 300));

    switch (check) {
        case true:
            tip = ((15 * bill) / 100);
            break;

        case false:
            tip = ((20 * bill) / 100);
            break;
        default:
            console.log('Invalid value');
            break;

    }


    let total = bill + tip;

    console.log(`Test data ${i + 1}: The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

}
//C:


function celsiusToFahrenheit(tempInC) {
    let celsiusInF = ((9 / 5) * (tempInC) + 32);
    console.log(`${tempInC} degrees C is ${celsiusInF} degrees F`);
}

function fahrenheitToCelsius(tempInF) {
    let fahrenInC = ((tempInF - 32) * 5) / 9;

    console.log(`${tempInF} degrees F is ${fahrenInC} degrees C`);
}


let cels = 34;
let fahren = 19;
celsiusToFahrenheit(cels);
fahrenheitToCelsius(fahren);

