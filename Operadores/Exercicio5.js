const nome = prompt(" Digite seu nome ")
const idade = prompt(" Digite sua idade ")
const anoNascimento = prompt(" DIgite o ano em que você nasceu ")

// const diferencaAnos = 2050 - new Date().getFullYear()

if(idade >= 18)
console.log(nome, "você é maior de idade ")
else
console.log(nome, "você é menor de idade ")

console.log(nome, "você terá em 2050", 2050 - anoNascimento, "anos")



