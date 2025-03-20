let tempoDeAndar = 0;
let caiu = false;

do{
    console.log(`Estou andado de bicicleta por: ${tempoDeAndar}`);
    tempoDeAndar++;
    
    if(tempoDeAndar === 5){
        caiu = true;
    }

}while(!caiu && tempoDeAndar < 10);