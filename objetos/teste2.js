const produtos = [
{id: 1, nome: " Teclado mecanico da razer ", preco:300},
{id: 2, nome: " Monitor dell, 21 polegadas ", preco: 3000},
{id: 3, nome: " Mouse logitech g403 ", preco: 400},

]

produtos[0].quantidade = 20
produtos[1].quantidade = 60
produtos[2].quantidade = 120


console.log(produtos)

const idProduto = prompt('insira o id do produto');
const nomeProduto = prompt('insira o nome do produto');
const precoProduto = prompt('insira o preço do produto');

let produtos2 = [];

function adicionarProdutos(id,nome,preco){

    const produto = {

    idProduto: id,
    nomeProduto: nome,
    precoProduto: preco,
    
}
    produtos2.push(produto)
}

adicionarProdutos(idProduto,nomeProduto,precoProduto)
console.log(produtos2)





