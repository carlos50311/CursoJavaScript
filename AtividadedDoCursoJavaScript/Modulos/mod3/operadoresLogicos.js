// Exemplos de operadores logicos em javaScript

let a = true;
let b = false;

const resultadoE1 = a && b;
const resultadoE2 = a && true;

console.log(resultadoE1);
console.log(resultadoE2);

const resultadoOU1 = a || b;
const resultadoOU2 = a || false;

console.log(resultadoOU1);
console.log(resultadoOU2);

const resultadoCombo1 = (a || b) && !b;
const resultadoCombo2 = (a && b) || a;

console.log(resultadoCombo1);
console.log(resultadoCombo2);