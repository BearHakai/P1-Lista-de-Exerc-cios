//Aqui solicitamos a temperatuda em farenheit e depois a convertemos
var faren = parseFloat(prompt("Informe a temperatura em Farenheit: "));
var celsius = (5 * (faren - 32) / 9);

//Aqui alertamos e mostramos no console o resultado
alert("A temperatura em Celsius é: " + celsius + " C°");
console.log("A temperatura em Celsius é: " + celsius + " C°");