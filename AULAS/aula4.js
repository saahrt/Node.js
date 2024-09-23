var num1 = 10;
var num2 = 0;
var op = "/";

switch(op){
    case "+":
    console.log(`Resultado ${num1 + num2}`); //template stream
    break;
    case "-":
    console.log(`Resultado ${num1 - num2}`); //template stream
    break; 
    case "*":
    console.log(`Resultado ${num1 * num2}`); //template stream
    break;    
    case "/":
        if(num2 !== 0){
            console.log(`Resultado ${num1 / num2}`); //template stream
        }else{
            console.log("Erro: divisão por Zero");
        }
    break; 
    default:
        console.log("Operador Inválido");
}
