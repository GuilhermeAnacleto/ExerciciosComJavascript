// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

/* ABAIXO ESTÁ A FÓRMULA PARA TRANSFORMAR FAHRENHEIT PARA KELVIN 
     Graus Fahrenheit(°F) para Kelvin(K)
 KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15*/

/* ABAIXO ESTÁ A FÓRMULA PARA TRANSFORMAR CELSIUS PARA FAHRENHEIT   
     Graus Celsius(°C) para Graus Fahrenheit (°C)
 GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32*/

 // a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let GRAUS_FAHRENHEIT = 77
let KELVIN

KELVIN = (GRAUS_FAHRENHEIT = 77 - 32)*(5/9) + 273.15

console.log(" KELVIN ", KELVIN)

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
 
let GRAUS_CELSIUS = 80
let GRAUS_FAHRENHEIT1 

GRAUS_FAHRENHEIT1 = (GRAUS_CELSIUS = 80)*(9/5) + 32

console.log(" Celsius ", GRAUS_FAHRENHEIT1)

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também


let GRAUS_CELSIUS1 = 30
let GRAUS_FAHRENHEIT2
let kelvin1 

// AQUI EMBAIXO TRANSFORMEI CELSIUS EM FAHRENHEIT
GRAUS_FAHRENHEIT2 = (GRAUS_CELSIUS1 = 30)*(9/5) + 32
console.log(" Fahrenheit ", GRAUS_FAHRENHEIT2)

// AQUI EMBAIXO COMO JÁ TINHA FEITO O CÁLCULO ACIMA PARA DESCOBRIR O GRAUS_FAHRENHEIT2, 
// USEI A FÓRMULA PARA DESCOBRIR KELVIN POIS PRIMEIRO TRANSFORMEI CELSIUS EM GRAUS_FAHRENHEIT2, 
// E DEPOIS COM O VALOR DE GRAUS_FAHRENHEIT2 CONSIGO DESCOBRIR KELVIN USANDO SUA FÓRMULA.
kelvin1= (GRAUS_FAHRENHEIT2 - 32)*(5/9) + 273.15
console.log(" KELVIN ", kelvin1 )


// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

const CELSIUS1 = prompt(" Digite um número para ser convertido ")
 let GRAUS_FAHRENHEIT3
 let kelvin2

GRAUS_FAHRENHEIT3 = (CELSIUS1)*(9/5) + 32
kelvin2 = (GRAUS_FAHRENHEIT3 - 32)*(5/9) + 273.15

console.log(" Fahrenheit ", GRAUS_FAHRENHEIT3)
console.log(" KELVIN ", kelvin2)





