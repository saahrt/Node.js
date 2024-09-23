//19. "Encontrar o Livro Mais Popular em uma Biblioteca com Base em Empréstimos"
function buscarLivroPop(biblioteca) {
    let livroMaisPopular = null; // inicializa a variável para o livro mais popular
    for (let i = 0; i < biblioteca.length; i++) {// loop através de cada livro na biblioteca
        const livro = biblioteca[i];
        // verifica se é o primeiro livro ou se o atual é mais popular
        if (!livroMaisPopular || livro.numeroEmprestimos > livroMaisPopular.numeroEmprestimos) {
            livroMaisPopular = livro; // atualiza o livro mais popular
        }
    }
    return livroMaisPopular; // retorna o livro mais popular encontrado
}
const biblioteca = [
    { titulo: "O Alquimista", numeroEmprestimos: 150 },
    { titulo: "1984", numeroEmprestimos: 200 },
    { titulo: "Dom Casmurro", numeroEmprestimos: 120 },
    { titulo: "A Revolução dos Bichos", numeroEmprestimos: 180 }
];
const livroPopular = buscarLivroPop(biblioteca);
console.log(`O livro mais popular é: "${livroPopular.titulo}" com ${livroPopular.numeroEmprestimos} empréstimos.`);