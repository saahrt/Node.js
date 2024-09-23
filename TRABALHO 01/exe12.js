//12. “Contar o Número de Vogais em uma Frase"
function contVog(frase) {
    const vogais = 'aeiouAEIOU'; // vogais
    let contador = 0; // inicializa o contador

    for (let i = 0; i < frase.length; i++) {
        // verifica se o caractere atual é uma vogal
        if (vogais.includes(frase[i])) {
            contador++; // incrementa o contador se for uma vogal
        }
    }
    return contador; // retorna o total de vogais
}
const frase = "Zebra comendo abacaxi";
const totalVogais = contVog(frase);
console.log(`O número de vogais na frase é: ${totalVogais}`);
