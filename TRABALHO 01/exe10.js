//10. "Verificar se um Número é Primo"
function Primo(num) {
    if (num < 2) return false;// números menores que 2 não são primos
    // verifica divisores de 2 até a raiz quadrada do número
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; // se for divisível, não é primo
        }
    }
    return true; // se não encontrou divisores, é primo
}

console.log(Primo(1));  // false
console.log(Primo(2));  // true

