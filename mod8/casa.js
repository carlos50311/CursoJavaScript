class Casa {

    constructor(cor, numQuartos, temGaragem) {
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    descrever() {
        let descricao = `Esta casa é ${this.cor}, tem ${this.numQuartos} quartos..... `;

        if (this.temGaragem){
            descricao += "e tem garagem";
        }
        else{
            descricao += "não tem garagem";
        }

        return descricao;

    }
}
const minhaCasa = new Casa("verde", 3, true);
const suaCasa = new Casa();

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());