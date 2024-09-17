//Calcular a Soma dos Números de 1 a N"
function SomarNum(num){
    let soma = 0; //inicializa
    for(let i = 1; i <=N ;i++){// contador de 1 à N
        soma += i;//Adiciona o valor de i à soma
    }
    return soma;//retorna o resultado final
}
const N = 10; 
const resultado = SomarNum(num);
console.log(`A soma dos números de 1 a ${num} é ${resultado}`);