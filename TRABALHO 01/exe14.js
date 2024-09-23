//14. "Organizar uma Lista de Contatos por Nome"
function ordCtts(contatos) {// algoritmo bubble Sort para ordenar contatos por nome
    const n = contatos.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (contatos[j].nome > contatos[j + 1].nome) {
                // troca caso estiverem na ordem errada
                const temp = contatos[j];
                contatos[j] = contatos[j + 1];
                contatos[j + 1] = temp;
            }
        }
    }
    return contatos; // retorna a lista de contatos ordenada
}
const listaContatos = [
    { nome: "Carlos", telefone: "1234-5678" },
    { nome: "Ana", telefone: "9876-5432" },
    { nome: "Bruno", telefone: "5555-5555" },
    { nome: "Maria", telefone: "1111-1111" }
];
const contatosOrdenados = ordCtts(listaContatos);

console.log("Lista de contatos ordenada:");
contatosOrdenados.forEach(contato => {
    console.log(`${contato.nome}: ${contato.telefone}`);
});