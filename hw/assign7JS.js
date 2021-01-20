let massLucas = 78;
let heightLucas = 1.69;
let bmiLucas_1 = massLucas / (heightLucas ** 2);
let bmiLucas_2 = massLucas / (heightLucas * heightLucas);

let massJohn = 92;
let heightJohn = 1.95;
let bmiJohn_1 = massJohn / (heightJohn ** 2);
let bmiJohn_2 = massJohn / (heightJohn * heightJohn);

let lucasHigherBMI = bmiLucas_1 > bmiJohn_1;

console.log("Test Data 1: " + lucasHigherBMI)

massLucas = 95;
heightLucas = 1.88;
bmiLucas_2 = massLucas / heightLucas ** 2;

massJohn = 85;
heightJohn = 1.76;
bmiJohn_2 = massJohn / heightJohn ** 2;

lucasHigherBMI = bmiLucas_2 > bmiJohn_2;

let results2 = `Lucas and John are friends, Lucas is ${heightLucas} m tall and John is ${heightJohn} m tall. So John has higher BMI than Lucas, that is ${!lucasHigherBMI}.`;

console.log(results2);





