//Solicita e armazena os dados para realizar os calculos do peso ideal
var sexo = prompt("Informe seu gênero em 'f' para feminino e 'm' para marculino: ");
var altura = parseFloat(prompt("Informe sua altura: "));
var imcMasculino = (72.7 * altura) - 58;
var imcFeminono = (62.1 * altura) - 44.7;
var peso = parseFloat(prompt("Informe seu peso atual: "));

//Abaixo tem uma verificacao se o usuario informou F ou M e assim revela os resultados com base no sexo
if(sexo == "f" || sexo == "F"){
    //aqui revela o resultado com base se esta ou nao no peso ideal
    if(peso > imcFeminono){
        alert("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está a cima do peso");
        console.log("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está a cima do peso");
    }
    else if(peso == imcFeminono){
        alert("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está no peso ideal");
        console.log("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está no peso ideal");
    }
    else if(peso < imcFeminono){
        alert("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está abaixo do peso ideal");
        console.log("Seu peso ideal é: " + imcFeminono + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está abaixo do peso ideal");
    }
    else{
        alert("Peso ou altura inválido");
        console.log("Peso ou altura inválido");
    }
}
//Abaixo tem uma verificacao se o usuario informou F ou M e assim revela os resultados com base no sexo
else if(sexo == "m" || sexo == "M"){
    //aqui revela o resultado com base se esta ou nao no peso ideal
    if(peso > imcMasculino){
        alert("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está a cima do peso");
        console.log("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está a cima do peso");
    }
    else if(peso == imcMasculino){
        alert("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está no peso ideal");
        console.log("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está no peso ideal");
    }
    else if(peso < imcMasculino){
        alert("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está abaixo do peso ideal");
        console.log("Seu peso ideal é: " + imcMasculino + " KG" + "\nSeu peso atual é: " + peso + " KG" + "\nVocê está abaixo do peso ideal");
    }
    else{
        alert("Peso ou altura inválido");
        console.log("Peso ou altura inválido");
    }
}