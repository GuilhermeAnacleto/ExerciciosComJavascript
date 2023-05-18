// Exemplo de entrada
const pessoa = {
    nome: "Guilherme",
    apelidos: ["Gui", "Guizin", "Guizuli"]
  };
  
  //Função para imprimir a mensagem
  function imprimeMensagem(objeto) {
// ou assim console.log(`Olá, meu nome é ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`);
console.log(`Olá, meu nome é ${objeto.nome}, mas pode me chamar de ${objeto.apelidos}.`);
  }

//Chamando a função
imprimeMensagem(pessoa);
  
pessoa.apelidos = 'Guizão, Guiks, Guiana'

imprimeMensagem(pessoa);