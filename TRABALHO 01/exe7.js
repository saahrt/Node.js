//7. "Determinar se UMA Palavra é um Palíndromo"
function Palindromo(palavra) {
    // .replace Remove espaços e .toLowerCase converte para minúsculas
    const palavraConf = palavra.replace(/\s+/g, '').toLowerCase(); 

    // Compara a palavra original com a invertida .spli Inverte a string.
    return palavraConf === palavraConf.split('').reverse().join('');// 
}
console.log(Palindromo("arara"));  // true
console.log(Palindromo("bola"));   // false
