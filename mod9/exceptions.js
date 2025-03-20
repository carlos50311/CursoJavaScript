class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    descrever() {
        throw new Error("Este método deve ser implementado por subclasses");
    }


    validar() {
        if (!this.endereco || !this.tamanho) {
            throw new Error("Dados invalidos para imovel");
        }
    }

}

class Casa extends Imovel {
    constructor(endereco, tamanho, cor, numQuarto, temGaragem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;
    }

    // descrever() {
    //     let descricao = `Casa localizada em ${this.endereco},de cor ${this.cor}, com ${this.numQuarto} quartos, de tamanho ${this.tamanho}m²`;

    //     descricao += this.temGaragem ? " e tem garagem" : " não tem garagem";

    //     return descricao;
    // }

    descrever() {
        try {

            this.validar();

            let descricao = `Casa localizada em ${this.endereco},de cor ${this.cor}, 
            com ${this.numQuarto} quartos, de tamanho ${this.tamanho}m²`;

            descricao += this.temGaragem ? " e tem garagem" : " não tem garagem";

            return descricao;
        } catch (error) {
            throw new Error(`Erro ao descrever a casa: ${error.message}`);
        }
    }
}

class Apartamento extends Imovel {
    constructor(endereco, tamanho, numeroAndar, possuiElevador) {
        super(endereco, tamanho);
        this.numeroAndar = numeroAndar;
        this.possuiElevador = possuiElevador;
    }
    descrever() {
        try {
            this.validar();

            let descricao = `Apartamento  elocalizadom ${this.endereco}, no ${this.numeroAndar} andar, de tamanho ${this.tamanho} m²`;

            descricao += this.possuiElevador ? " e possui elevador" : " não possui elevador";

            return descricao;
        } catch (error) {
            console.log(`Erro ao descrever o apartamento: ${error.message}`);
        }
    }

}

// function descreverImovel(imovel) {
//     console.log(imovel.descrever());
// }

function descreverImovel(imovel) {
    try {
        console.log(imovel.descrever());
    } catch (error) {
        console.log(error.message);
    }
}

const minhaCasa = new Casa("Rua A 123", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Rua B 456", 80, 5, true);

console.log(minhaCasa.descrever());
console.log(meuApartamento.descrever());

const casaInvalida = new Casa("", 0, "verde", 2, false);
console.log(casaInvalida.descrever());