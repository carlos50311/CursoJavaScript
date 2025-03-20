// Função que recebe a luz do semaforo e decide a ação do pedestre
function checkTrafficLight(lightColor){

    switch(lightColor){

        case "verde":
            console.log("Pode atravessar a rua");
            break;

        case "amarelo":
            console.log("Prepare-se para parar");
            break;

        case "vermelho":
            console.log("Pare! Não atravesse a rua")
            break;
        
        default :
            console.log("Cor invalida! Aguarde até que o semaforo esteja em u cor valida");
   }
}

checkTrafficLight("amarelo")