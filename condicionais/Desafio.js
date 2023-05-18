const generoGosta = prompt(" Qual genero de filme deseja assistir? ").toLowerCase()
const valorIngresso = Number(prompt(" Insira o valor do ingresso: "))

if(generoGosta === "fantasia" && valorIngresso <= 15){ // fantasia tem que ser minusculo pois usei lowercase
                                                      //se tivesse usado uppercase dai o fantasia poderia ser maiusculo
console.log(" Tenha um ótimo filme ")

const snack = (prompt(" Qual snack deseja comprar? "));

console.log(`aproveite seu ${snack}`);

}

else if( valorIngresso > 15){

     console.log(" Escola um filme mais barato ")
}

else if(generoGosta !== "fantasia"){

    console.log(" Escolha outro genero de filme ")
}
