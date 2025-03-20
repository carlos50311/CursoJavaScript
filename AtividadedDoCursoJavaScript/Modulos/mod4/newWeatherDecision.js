// variavel que representa a previsão do tempo
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)

let weatherForecast = "cloudy" ;

if(weatherForecast === "rainy"){
    console.log("Devemos levar um guarda-chuva!");
}else if(weatherForecast === "cloudy"){
    console.log("Devemos levar o guarda-chuva, só por segurança.")
}
else{
    console.log("Não devemos levar um guarda-chuva!");
}