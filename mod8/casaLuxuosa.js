class Casa {
    constructor(cor, numQuartos, temGaragem) {
        this._cor = cor;
        this._numQuartos = numQuartos;
        this._temGaragem = temGaragem;
    }

    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get numQuartos() {
        return this._numQuartos;
    }

    set numQuartos(novoNumQuarto) {
        this._numQuartos = novoNumQuarto;

    }

    get temGaragem() {
        return this._temGaragem;
    }

    set temGaragem(novaGaragem) {
        this._temGaragem = novaGaragem;
    }

    descrever() {
        let descricao = `Esta casa é ${this._cor}, tem ${this._numQuartos} quartos..... `;

        if (this._temGaragem) {
            descricao += "e tem garagem";
        }
        else {
            descricao += "não tem garagem";
        }

        return descricao;

    }
}

class CasaLuxuosa extends Casa {

    constructor(cor, numQuartos, temGaragem, temPiscina) {
        super(cor, numQuartos, temGaragem);
        this._temPiscina = temPiscina;
    }

    descrever() {
        let descricao = super.descrever();

        if (this._temPiscina) {
            descricao += " tambèm tem piscina";
        }
        else {
            descricao += "não tem piscina";
        }

        return descricao;
    }

}

const casinha = new Casa("verde", 3, true);
const casaLuxuosa = new CasaLuxuosa("verde", 3, true, true);


console.log(casinha.descrever());
console.log(casaLuxuosa.descrever());
