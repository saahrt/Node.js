//11. "Ordenar uma Lista de Números em Ordem Crescente"
function ordNum(arr) {
    //percorre repetidamente o array e troca elementos adjacentes se eles estiverem na ordem errada
    const n = arr.length;
    // loop p/ cada elemento do array (controla o número de passagens)
    for (let i = 0; i < n - 1; i++) {
        // ultimos elementos já estão ordenados (compara e troca elementos)
        for (let j = 0; j < n - 1 - i; j++) {
            // troca se o elemento atual for maior que o próximo
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; // retorna o array ordenado
}
const numeros = [5, 3, 8, 1, 2, 7];
const numerosOrdenados = ordNum(numeros);
console.log(`Números em ordem crescente: ${numerosOrdenados}`);