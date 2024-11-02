//Solicita as informacoes para o resultado final
var hora = parseInt(prompt("Informe quantas horas você trabalha por dia: "));
var dias = parseInt(prompt("Informe quantos dias você trabalha por mês: "));
var dinheiro = parseFloat(prompt("Informe quanto você ganha por hora: "));
var salario = (hora * dinheiro) * dias;

//Informa o usuario o resultado e o coloca no console
alert("Dias: " + dias + "\nHoras: " + hora + "\nQuanto ganha por Hora: " + dinheiro + "\nSalario Final: " + salario);
console.log("Dias: " + dias + "\nHoras: " + hora + "\nQuanto ganha por Hora: " + dinheiro + "\nSalario Final: " + salario);