const turno = prompt(" Informe em qual turno você estuda? (M para Matutino, V para Vespertino ou N para Noturno) ")
switch(turno.toUpperCase()){

    case "M":
        console.log("Bom dia!")
    break;
 

     case "V":
    console.log(" Boa tarde! ")

    break;

    case "N":
    console.log(" Boa Noite! ")
     
    break;
    default:

    console.log(" Digite M, V ou N seu burro! ")
    break;
    
}

