const endereco = {

    rua: " Av João Correa ",
    numero: 100,
    cidade: " São Leopoldo ",
    estado: " Rio Grande do Sul "

}

const usuario = {

    nome: " Guilherme ",
    idade: 25,
    endereco: endereco,
    senha: 23

}
console.log(usuario)

const filme = {
 
    nomeFilme: "",
    anoFilme: "",
    direcao: "",
    elenco: ""

}
filme.nomeFilme = " Velozes e Furiosos 10 "
filme.anoFilme = 2023
filme["direcao"] = " Vin Diesel "
filme["elenco"] =  " Paul Walker, Vin Diesel, Tyrese Gibson, Michelle Rodriguez "
console.log(filme)