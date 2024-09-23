var nota = 101;

if(nota >= 90 && nota <= 100){
    console.log("Classificação da Nota A");
}else if(nota >= 80 && nota < 90){
    console.log("Classificação da Nota B");
}else if(nota >= 70 && nota < 80){
    console.log("Classificação da Nota C");
}else if(nota >= 60 && nota < 70){
    console.log("Classificação da Nota D");
}else if(nota >= 0 && nota < 60){
    console.log("Classificação da Nota F");
}else{
    console.log("Classificação da Nota Inválida");
}