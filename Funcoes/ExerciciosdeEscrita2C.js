function recebeNumeros(numero1, numero2){
    const ehpar = numero1 % numero2 === 0
    return ehpar

}
console.log(recebeNumeros(Number(prompt(" Digite um número : ")), Number(prompt(" Digite um número : "))));