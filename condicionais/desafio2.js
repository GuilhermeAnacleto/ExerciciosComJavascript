// tabela de preços
const valoresIngressos = [
    [1320, 880, 550, 220], // jogos domésticos - categoria 1, 2, 3 e 4
    [660, 440, 330, 170],
    [1980, 1320, 880, 330] // jogos internacionais - categoria 1, 2, 3 e 4 (mesma ordem)
    ];
    
    // solicitação das informações do usuário
    const nomeCompleto = prompt("Qual é o seu nome completo?");
    const tipoJogo = prompt("Qual é o tipo do jogo? Digite 'IN' para jogos internacionais ou 'DO' para jogos domésticos.");
    const etapaJogo = prompt("Qual é a etapa do jogo? Digite 'SF' para semi-final, 'DT' para decisão de terceiro lugar ou 'FI' para final.");
    const categoria = prompt("Qual é a categoria do jogo? Digite 1, 2, 3 ou 4.");
    const quantidadeIngressos = Number(prompt("Quantos ingressos você deseja comprar?"));
    
    // cálculo do valor do ingresso e valor total
    let valorIngresso = 0;

    if (tipoJogo.toUpperCase() === "DO") { // jogos domésticos

    valorIngresso = valoresIngressos[0][categoria-1];

    } 
    else if (tipoJogo.toUpperCase() === "IN") { // jogos internacionais

    valorIngresso = valoresIngressos[2][categoria-1] * 4.1; // valor em reais: valor em dólar x R$4,10

    }

    const valorTotal = valorIngresso * quantidadeIngressos;
    
  
    console.log("---Dados da compra---");
    console.log("Nome do cliente:", nomeCompleto);
    console.log("Tipo do jogo:", tipoJogo.toUpperCase() === "IN" ? "Internacional" : "Nacional"); // verifica se é jogo internacional ou não
    console.log("Etapa do jogo:", etapaJogo.toUpperCase() === "SF" ? "Semi-Final" : etapaJogo.toUpperCase() === "DT" ? "Decisão de Terceiro Lugar" : "Final"); // verifica qual é a etapa do jogo
    console.log("Categoria:", categoria);
    console.log("Quantidade de Ingressos:", quantidadeIngressos, "ingressos");
    console.log("---Valores---");
    console.log("Valor do ingresso:", tipoJogo.toUpperCase() === "IN" ? "U$" : "R$", valorIngresso.toFixed(2).replace(".", ",")); // verifica se é jogo internacional ou não e altera a moeda
    console.log("Valor total:", tipoJogo.toUpperCase() === "IN" ? "U$" : "R$", valorTotal.toFixed(2).replace(".", ",")); // verifica se é jogo internacional ou não e altera a moeda
    
    //toFixed(2).



