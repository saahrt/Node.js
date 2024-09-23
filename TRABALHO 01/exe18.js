//18. "Determinar a Idade Média de um Grupo de Pessoas""
function contIdadeMed(grupo) {
    let somaIdades = 0; // inicializa a soma das idades
    for (let i = 0; i < grupo.length; i++) {// loop através de cada pessoa no grupo
        somaIdades += grupo[i].idade; // adc a idade à soma
    }
    const idadeMedia = somaIdades / grupo.length;
    return idadeMedia; // retorna a idade média
}
const grupo = [
    { nome: "Carlos", idade: 30 },
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 40 },
    { nome: "Maria", idade: 35 }
];
const media = contIdadeMed(grupo);
console.log(`A idade média do grupo é: ${media.toFixed(2)} anos`);