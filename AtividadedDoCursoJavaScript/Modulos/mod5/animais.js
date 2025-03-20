let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

let parteAnimal1 = animal1.substring(3, 8);
console.log("O resultado do metodo substring(): " + parteAnimal1);

let novoAnimal2 = animal2.replace("ra", "re");
console.log("O vaor resultado do metodo replace(): " + novoAnimal2);

let AnimaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado do metodo concat(); " + AnimaisJuntos);
