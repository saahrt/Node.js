//17. "Classificar Estudantes por Notas em um Relatório de Classe"
function classifEstudantes(estudantes) {
    const n = estudantes.length;
    for (let i = 0; i < n - 1; i++) {// bubble Sort para ordenar estudantes por notas
        for (let j = 0; j < n - 1 - i; j++) {
            if (estudantes[j].nota < estudantes[j + 1].nota) {
                // troca os estudantes se estiverem na ordem errada
                const temp = estudantes[j];
                estudantes[j] = estudantes[j + 1];
                estudantes[j + 1] = temp;
            }
        }
    }
    return estudantes; // retorna a lista de estudantes ordenada
}
const estudantes = [
    { nome: "Carlos", nota: 85 },
    { nome: "Ana", nota: 92 },
    { nome: "Bruno", nota: 76 },
    { nome: "Maria", nota: 89 }
];
const estudantesClassificados = classifEstudantes(estudantes);
console.log("Relatório de Classe (Estudantes por Notas):");
estudantesClassificados.forEach(estudante => {
    console.log(`${estudante.nome}: ${estudante.nota}`);
});