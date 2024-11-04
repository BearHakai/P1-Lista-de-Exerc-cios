//Armazena os dados que o usuario informa para fazer o calculo
var metros = parseFloat(prompt("Informe quantos metros serão pintados: "));
var litros = metros / 3;
var latas = litros / 18;
var latasPreco;

//Verifica se as latas sao um numero inteiro ou real, caso seja um numero inteiro ira adicionar uma lata a mais ja que nao se compra lata pela metade
if(!Number.isInteger(latas)){
    latas = parseInt(latas) + 1;
    latasPreco = latas * 80;
    alert("Para pintar " + metros + " m², precisará de " + latas + " latas" + "\nO total a pagar será: R$ " + latasPreco);
    console.log("Para pintar " + metros + " m², precisará de " + latas + " latas" + "\nO total a pagar será: R$ " + latasPreco);
}
else{
    latasPreco = latas * 80;
    alert("Para pintar " + metros + " m², precisará de " + latas + " latas" + "\nO total a pagar será: R$ " + latasPreco);
    console.log("Para pintar " + metros + " m², precisará de " + latas + " latas" + "\nO total a pagar será: R$ " + latasPreco);
}
