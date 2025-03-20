let array1 = [];
let array2 = new Array();
let array3 = ["maçã", "banana", "laranja"];

console.log("Array 1: ", array1);
console.log("Array 2: ", array2)
console.log("Array 3: ", array3);

console.log("\nArray após adicionar elementos");
array1.push("el1");
array2.push("el2");
array3.push("el3");

console.log("Novo array 1:", array1);
console.log("Novo array 2:", array2);
console.log("novo array 3:", array3);
let primeiroElemento = array1[0];
let erro = array1[1];1
let segundoElemento = array2[0];
let terceiroElemento = array3[3];


console.log("Primeiro elemento ", primeiroElemento);
console.log("Erro ", erro);
console.log("Segundo elemento ", segundoElemento);
console.log("Terceiro elemento ", terceiroElemento);

array1[0] = "novo elemento";
console.log("Array 1 após alteração: ", array1);