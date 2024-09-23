//22. "Calcular a Pontuação Total de um Jogador em um Jogo"
function calcularPT(jogador) {
    let PT = 0; // inicializa a pontuação total
    for (let i = 0; i < jogador.pontuacoes.length; i++) {// percorre através das pontuações do jogador
        PT += jogador.pontuacoes[i]; // Adiciona cada pontuação à total
    }
    return PT; // retorna a pontuação total
}
const jogador = {
    nome: "Carlos",
    pontuacoes: [150, 200, 320, 100] // pontuações em diferentes partidas
};
const total = calcularPT(jogador);
console.log(`A pontuação total de ${jogador.nome} é: ${total}`);