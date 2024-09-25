// Solicitar ao usuário que insira a temperatura
let numero = parseFloat (prompt("Digite um numero"));
// Verificar Temperatura

if (numero <=0){
    alert ("Muito Frio");
}
else if (numero>=0 && numero<=15){
    alert ("Frio");
}
else if (numero>=16 && numero<=25){
    alert ("Agradável");
}
else if (numero>=26 && numero<=35){
    alert ("Quente");
}
else {
    alert ("Muito Quente");
}