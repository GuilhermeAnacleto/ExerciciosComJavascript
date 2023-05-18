// 2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa = {
	nome: "Guilherme", 
    idade: 25, 
	profissao: "Estudante"
}
const pessoa2 = {
    nome: "Maria",
    idade: 32,
    profissao: "advogada"
}

// b)
function infoPessoa(pessoa) {
const nome = pessoa.nome;
const nCaracteresNome = nome.length;
const idade = pessoa.idade;
const profissao = pessoa.profissao;
const nCaracteresProfissao = profissao.length;

return [nome, nCaracteresNome, idade, profissao, nCaracteresProfissao];
}

console.log(infoPessoa(pessoa)); // ["João", 4, 30, "engenheiro", 10]
console.log(infoPessoa(pessoa2)); // ["Maria", 5, 25, "advogada", 8]





