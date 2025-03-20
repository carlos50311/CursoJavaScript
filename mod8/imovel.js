class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    descrever() {
        throw new Error("Este método deve ser implementado por subclasses");
    }
}

class Casa extends Imovel {
    constructor(endereco, tamanho, cor, numQuarto, temGaragem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;
    }

    descrever() {
        let descricao = `Casa localizada em ${this.endereco},de cor ${this.cor}, com ${this.numQuarto} quartos, de tamanho ${this.tamanho}m²`;

        descricao += this.temGaragem ? " e tem garagem" : " não tem garagem";

        return descricao;
    }
}

class Apartamento extends Imovel {
    constructor(endereco, tamanho, numeroAndar, possuiElevador) {
        super(endereco, tamanho);
        this.numeroAndar = numeroAndar;
        this.possuiElevador = possuiElevador;
    }

    descrever() {
        let descricao = `Apartamento  elocalizadom ${this.endereco}, no ${this.numeroAndar} andar, de tamanho ${this.tamanho} m²`;

        descricao += this.possuiElevador ? " e possui elevador" : " não possui elevador";

        return descricao;
    }
}

function descreverImovel(imovel) {
    console.log(imovel.descrever());
}

const minhaCasa = new Casa("Rua A 123", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Rua B 456", 80, 5, true);

console.log(minhaCasa.descrever());
console.log(meuApartamento.descrever());