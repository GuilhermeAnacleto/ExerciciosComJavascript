/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console */

    const listaDeTarefas = []

    console.log(" Informe 3 tarefas que você irá realizar no dia de hoje: ")

    const pergunta1 = prompt(" Informe a primeira tarefa: " )

    const pergunta2 = prompt(" Informe a segunda tarefa: " )

    const pergunta3 = prompt(" Informe a terceira tarefa: " )

    listaDeTarefas.push(pergunta1, pergunta2, pergunta3)

    console.log(" As três tarefas realizadas no dia de hoje são: " + listaDeTarefas)

    const remover = Number(prompt( " Insira um número entre 0, 1 ou 2 para remover uma tarefa " ))

    listaDeTarefas.splice(remover, 1)// se tirar o 1 ele informa somente o valor escolhido pelo usuario
    
    console.log(" A sua lista de tarefas atualizada é: " + listaDeTarefas)
    
    
    