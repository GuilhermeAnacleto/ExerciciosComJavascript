let pokemon = prompt('escolha seu pokemon inicial: (bulbassauro, charmander ou squirtle)')

switch (pokemon.toLowerCase()){

case "bulbassauro":
    console.log('pokemon bulbassauro do tipo planta e veneno')    
        break;

 case "charmander":
    console.log('pokemon charmander do tipo fogo')
        break;

case "squirtle":
    console.log('pokemon squirtle do tipo agua')
        break;

default:
    console.log('voce escolheu um pokemon invalido, ira receber um pikachu do tipo eletrico')
        break;
}