function recebaNome(nome,idade, mora, estudante){
    console.log(` Olá ${nome}, você tem ${idade} anos, mora em ${mora} e ${estudante} estudante `); // ou console.log(" Olá, " + nome );
  
}
recebaNome(prompt(" Digite seu nome: "), prompt(" Digite sua idade: " ), prompt(" Digite onde mora: "), prompt(" Informe se você é estudante: "));
