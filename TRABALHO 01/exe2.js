//2. "Calcular a Nota Final de um Aluno com Base em Notas de Provas e Trabalhos"

function NotaFinal(NP, NT) { //função para calcular a NF
    // verifica se as listas de notas não estão vazias
    if (NP.length === 0 || NT.length === 0) { 
        throw new Error("As listas de notas não podem estar vazias.");
    }

    // cálculo da soma das notas das provas
    let somaProvas = 0;
    for (let i = 0; i < NP.length; i++) {
        somaProvas += NP[i];
    }
    const medProvas = somaProvas / NP.length; //média das provas

    // cálculo da soma das notas dos trabalhos
    let somaTrabalhos = 0;
    for (let j = 0; j < NT.length; j++) {
        somaTrabalhos += NT[j];
    }
    const medTrab = somaTrabalhos / NT.length; // média dos trabalhos
    const NF = (medProvas * 0.7) + (medTrab * 0.3); // cálculo da nota final
    return NF;
}

const NP = [8.0, 7.5, 9.0]; // provas
const NT = [6.5, 7.0]; // trabalhos

try {
    const NF = NotaFinal(NP, NT);
    console.log("A Nota Final do aluno é: " + NF.toFixed(2)); 
    // saída com .tofixed para reduzir as casas decimais e ficar mais bunitin
} catch (error) {
    console.error(error.message);
}
