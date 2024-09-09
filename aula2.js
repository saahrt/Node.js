//verifique se a idade é de uma criança, adolescente, adulto ou idoso
var idade = 100000000

if(idade <= 13 && idade >= 1){
    console.log("Você é uma criança");
}if(idade >= 14 && idade <= 17){
    console.log("Você é um adolescente");
}if(idade >= 18 && idade <= 59){
    console.log("Você é um adulto");
}if(idade >= 60){
     console.log("Você é um idoso");
}