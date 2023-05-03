const nome = "             GUILHERME anacleto "
console.log(nome.includes("guilherme")); // assim ele da falso pois Guilherme está digitado de formas diferentes
console.log(nome.toLowerCase().includes("guilherme"))
// aqui a cima vai dar verdadeiro pois foi usado o to lower case, entao independente de como o usuario digitar
// seja maiusculo ou minusculo o sistema ira entender

