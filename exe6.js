//"Calcular o Fatorial de um Número"
function fatorial(n){
    if(n < 0){//verifica se o número é negativo
        throw new Error(`O fatorial não está definido para números negativos.`);
    }else if (n === 0 || n === 1) {//verirficar se o número é igual a 1 ou 0
        return 1;
    }else{
        let resultado = 1; // Inicializa o resultado como 1
        //calcular o fatorial
        for (let i = 2; i <= n; i++) {
            resultado *= i; // Multiplica o resultado pelo valor atual de i
        }
        
        return resultado;
    }
}
const num = 5
try {
    const resultado = fatorial(num);
    console.log(`O fatorial do número ${num} é igual ${resultado}`);
} catch (error) {
    console.error(error.message); // Imprime a mensagem de erro no console
}