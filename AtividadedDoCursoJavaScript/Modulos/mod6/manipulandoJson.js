let pessoa = {
    "nome": "Carlos",
    "sobrenome": "Montes",
    "idadde": 22,
    "endereco": {
        "rua": "Avenida Brasilia",
        "numero": 2415
    },
    "telefone": ["3196891682"]
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idadde"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefone"][0]);

pessoa.email = "geraldocarlos503@@gmail.com";
console.log(pessoa);

pessoa.idadde = 23;
console.log(pessoa);

delete pessoa.telefone;
console.log(pessoa);

pessoa.hobbie = ["Estudar", "Jogar futebol"];
console.log(pessoa);

pessoa.hobbie.push("Viagem");
console.log(pessoa);

for (let chave in pessoa) {
    console.log(chave + " " + pessoa[chave]);
}

let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto);

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);