const pessoa = { 
nome: " Guilherme ",
idade: 30,
genero: " Funk"

}

function adicionarPessoa(pessoa){

    const novaPessoa = {
...pessoa,
comidas:[ " moranga ", " feijao ", " arroz" ],
melhorAmigo: {
    nome: " Maria ",
    idade: 40,

}
}
return novaPessoa;
}

console.log(adicionarPessoa(pessoa));