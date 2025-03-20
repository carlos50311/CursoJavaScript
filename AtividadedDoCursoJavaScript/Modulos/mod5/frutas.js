let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log(frutas.length);

let parteFrutas = frutas.slice(5, 21);
console.log(parteFrutas);

let frutaComEspaco = "      abacaxi         ";
let frutaSemEspaco = frutaComEspaco.trim();
console.log(frutaSemEspaco);

let arrayFrutas = frutas.split(",");
console.log(arrayFrutas);