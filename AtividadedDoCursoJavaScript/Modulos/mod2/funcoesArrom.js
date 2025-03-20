// Funções Arrow

//Exemplo básico de uma função arrow que soma dois numeros 

let exemplo = (parametro1, parametro2) => { return parametro1 + parametro2 };

console.log(exemplo(2, 4));

//Exemplo de uma arrow function usada como calback
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Usando arrow function com o método map para dobra o valores do array

let numerosDobrados = numeros.map((n => n * 2));

console.log(numerosDobrados);

//Exemplo de função arrow mais complexo 
let saudacao = (nome, idade) => {
    let mensagem = `Olá, é um prazer te conhecer ${nome}, e você tem ${idade} anos de idade `;
    return mensagem;
}

console.log(saudacao("João", 25))