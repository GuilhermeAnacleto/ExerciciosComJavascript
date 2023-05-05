function calculadora(n1,n2){

const soma = n1 + n2
const diferenca = n1 - n2
const multiplicacao = n1 * n2
const divisao = n1 / n2

return[soma,diferenca,multiplicacao,divisao]

}
const numero1 = Number(prompt(" Digite um número: "))
const numero2 = Number(prompt(" Digite outro número: "))

console.log(calculadora(numero1, numero2))