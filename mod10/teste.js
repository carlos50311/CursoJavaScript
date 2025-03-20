let testandoPromessa = new Promise((resolve, reject) => {

    let sucesso = true;

    if (sucesso) {
        resolve("Deu certo");
    } else {
        reject("Deu errado");
    }
})

testandoPromessa.then((result) => {

    console.log(result);

}).catch((error) => {

    console.log(erro)

}).finally(() => {

    console.log("Promessa finalizada");

})