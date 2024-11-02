//As variaveis armazenam as informacoes que o usuario informa e faz os calculos
var dinheiro = parseFloat(prompt("Informe o quanto você ganha por hora: "));
var horas = parseInt(prompt("Informe quantas horas trabalha por dia: "));
var dias = parseInt(prompt("Informe quantos dias trabalha por mês: "));
var salarioBruto = (dinheiro * horas) * dias;
var impostoRenda
var inss = (salarioBruto * 0.08);
var sindicato = (salarioBruto * 0.05);
var salarioLiquido

//Devido a atualizacao da tabela do imposto de renda, aqui comeca uma verificacao do quanto se ganha para ver qual sera o imposto cobrado no seu salario final
if(salarioBruto <= 1903.98){
    impostoRenda = 0;
    salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    alert("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
    console.log("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
}
else if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    impostoRenda = (salarioBruto * 0.075);
    salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    alert("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
    console.log("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
}
else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    impostoRenda = (salarioBruto * 0.15);
    salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    alert("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
    console.log("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
}
else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    impostoRenda = (salarioBruto * 0.225);
    salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    alert("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
    console.log("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
}
else if(salarioBruto >= 4664.69){
    impostoRenda = (salarioBruto * 0.275);
    salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    alert("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
    console.log("Salário Bruto: R$" + salarioBruto + "\nINSS: R$ " + inss + "\nSindicato: R$ " + sindicato + "\nSalário Líquido: R$ ");
}