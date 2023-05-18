let paisdeOrigem = prompt(" Digite o pais onde nasceu ")

switch(paisdeOrigem.toLowerCase()){
case `Brasil`.toLowerCase():
    console.log(`Brasileiro`)
    break

case `EUA`.toLowerCase():
    console.log(`Norte Americano`)
    break

case `Inglaterra`.toLowerCase():
    console.log(`Ingles`)
    break

default:
     console.log(`Nacionalidade não encontrada`)
     break

}