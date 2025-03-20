let frutas = [' maça ', ' banana ', ' laranja ', ' uva '];

console.log("Array inicial: " + frutas);
console.log("Comprimento do array: " + frutas.length);

let novoComprimento = frutas.push(' melancia ', ' abacate ');
console.log("\nArray atualizado push: " + frutas);
console.log("Novo comprimento do array: " + novoComprimento);

let ultimaFruta = frutas.pop();

console.log("\nArray após pop: " + frutas);
console.log("Ultima fruta removida: " + ultimaFruta);

let primeiraFruta = frutas.shift();
console.log("\nArray atualizado shift: " + frutas);
console.log("Prieiro elemento removdo: " + primeiraFruta);