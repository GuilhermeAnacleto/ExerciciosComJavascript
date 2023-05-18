function podeEstudarFaculdade() {

    const idade = Number(prompt("Qual é a sua idade?"));
    
    const concluiuEnsinoMedio = prompt("Você concluiu o ensino médio? (Sim ou Não)").toLowerCase() == "sim";
    
    const estaCursandoOutraFaculdade = prompt("Você está cursando outra faculdade? (Sim ou Não)").toLowerCase() == "nao";
    
    if (concluiuEnsinoMedio && idade >= 18 && estaCursandoOutraFaculdade) {
    return "Matricula realizada com sucesso";
    }
    
    else if(idade < 18 ) {
    return "Você não pode se matricular, pois é menor de idade";
    }
    
    else if (!concluiuEnsinoMedio){
    return "Você não pode se matricular, pois não concluiu o ensino médio";
    }
    
    else if(!estaCursandoOutraFaculdade){
    return "Você não pode se matricular, pois está fazendo outra faculdade";
    }
    }
    
    console.log(podeEstudarFaculdade());


