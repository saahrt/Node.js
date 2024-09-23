//9. Calcular a Soma dos Números de 1 a N"
function SomarNum(num){
    let soma = 0; //inicializa
    for(let i = 1; i <= num ;i++){// contador de 1 à num
        soma += i;//Adiciona o valor de i à soma
    }
    return soma;//retorna o resultado final
}
const N = 10; 
const resultado = SomarNum(N);//passa N para a função
console.log(`A soma dos números de 1 a ${N} é ${resultado}`);