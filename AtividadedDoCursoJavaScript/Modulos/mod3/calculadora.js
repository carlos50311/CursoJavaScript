// calculador.js

// Função que simula a operação de uma calculadora
function calculadora(num1, num2) {

    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multipicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    let incremento = num1;
    incremento++;

    let decremento = num2;
    decremento--;


    console.log(`${num1} + ${num2} = ${adicao}`);
    console.log(`${num1} - ${num2} = ${subtracao}`);
    console.log(`${num1} * ${num2} = ${divisao}`);
    console.log(`${num1} / ${num2} = ${multipicacao}`);
    console.log(`${num1} % ${num2} = ${modulo}`);
    console.log(`${num1} ** ${num2} = ${exponencial}`);
    console.log(`Incremento (${num1}) ++ = ${incremento} `);
    console.log(`Decremento (${num2}) -- = ${decremento} `);
}

calculadora(10, 5)