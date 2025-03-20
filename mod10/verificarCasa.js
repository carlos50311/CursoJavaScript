function verificaStatusCasa(casa) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está disponível`);
            } else {
                reject(`A casa localizada em ${casa.endereco} não está disponível`);
            }
        }, 2000);
    });
}


function inspecionarCasa(casa) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`A casa localizada em ${casa.endereco} foi inspecionada`);
        }, 1000);
    });
}

function repararCasa(casa) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`A casa localizada em ${casa.endereco} foi reparada`);
        }, 3000);
    });
}

class Casa {
    constructor(endereco, cor, numQuartos, temGaragem) {
        this.endereco = endereco;
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numQuartos} quartos`;

        descricao += this.temGaragem ? " e tem garagem " : " não tem garagem ";

        return descricao;
    }

    verificarStatus() {

        verificaStatusCasa(this)
            .then((resultado) => {
                console.log(resultado);
                return inspecionarCasa(this);
            })
            .then((resultadoInspecao) => {
                console.log(resultadoInspecao);
            })
            .catch((erro) => {
                console.error(erro);
                return repararCasa(this);
            })
            .then((resultadoReparo) => {
                if (resultadoReparo) {
                    console.log(resultadoReparo);
                    return inspecionarCasa(this);
                }
            })
            .then((resultadoFinalInspecao) => {
                if (resultadoFinalInspecao) {
                    console.log(resultadoReparoFinalinspensao);
                }
            })
            .catch((error) => {
                console.error(`Erro final ${error}`);
            });
    }
}

const minhaCasa = new Casa("Rua A 123", "azul", 3, true);

console.log(minhaCasa.descrever());

minhaCasa.verificarStatus();

const casaInvalida = new Casa("", 0, "Verde", 2, true);

console.log(casaInvalida.descrever());

casaInvalida.verificarStatus();