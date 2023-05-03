//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//console.log(numeros);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const indice = Number(prompt(" Digite um número entre 0 e 9"))
console.log(numeros[indice -1]); // se eu colocar so o indice sem o menos 1 ele vai dar o proximo numero que é 6, 
// então para ser exato preciso colocar o menos 1



const frutas = ["banana", "maçã", "pera"]
const valor = Number(prompt(" Digite um número entre 1 e 3"))
console.log(frutas[valor -1])

const cachorro = ["Poodle", "Pug", "Fila", "Husky", "Golden"]
const valor1 = Number(prompt(" Digite um número de 1 a 5 "))

cachorro[valor1 -1] === undefined ?// ponto de interrogação é tipo if e else, aqui seria IF
console.log(" Você deve digitar um número entre 1 e 5 ")://como tem um ? acima aqui é necessario : para funcionar, aqui seria ELSE
console.log(cachorro[valor1 -1])

