/* Questão 4: você vai ao cinema com um amigo ou amiga,
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

const generoGosta = prompt(" Qual genero de filme deseja assistir? ").toLowerCase()
const valorIngresso = Number(prompt(" Insira o valor do ingresso: "))

if(generoGosta === "fantasia" && valorIngresso <= 15){ // fantasia tem que ser minusculo pois usei lowercase
                                                      //se tivesse usado uppercase dai o fantasia poderia ser maiusculo

    console.log(" Tenha um ótimo filme ")
}

else if( valorIngresso > 15){

     console.log(" Escola um filme mais barato ")
}

else if(generoGosta !== "fantasia"){

    console.log(" Escolha outro genero de filme ")
}



























