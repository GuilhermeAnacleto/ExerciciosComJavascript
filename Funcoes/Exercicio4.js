function filtrarArray(arrayNumeros){

    const primeiroNumero = arrayNumeros[0]
    const ultimoNumero = arrayNumeros[arrayNumeros.length -1] // LENGTH
    return [primeiroNumero,ultimoNumero] // return primeiroNumero,ultimoNumero, colocando assim ele daria retorno so do primeiro numero
}

const numeros = [10,20,30,40,50,60,70,80,90];
console.log(filtrarArray(numeros))