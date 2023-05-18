/* 3. Resolva os passos a seguir: 
    
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
       
d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.*/



const carrinho = []

const fruta1 ={

    nome: " Bergamota ",
    disponivel: true

}

const fruta2 = {

    nome: " Pitaya ",
    disponivel: true

}

const fruta3 = {

    nome: " morango ",
    disponivel: true

}
function adicionarProduto(fruta){
    carrinho.push(fruta)

}
adicionarProduto(fruta1)
adicionarProduto(fruta2)
adicionarProduto(fruta3)

console.log(carrinho);