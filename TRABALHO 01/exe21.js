//21. Listar os Produtos que Estão Acima do Estoque Mínimo"
function listProdAc(produtos) {
    const prodAcMin = []; // inicializa um array para os produtos acima do mínimo
    for (let i = 0; i < produtos.length; i++) {// percorre cada produto
        const produto = produtos[i];
        // verifica se a quantidade em estoque é maior que o estoque mínimo
        if (produto.quantEstq > produto.estqMin) {
            prodAcMin.push(produto); // adc o produto ao array
        }
    }
    return prodAcMin; // retorna os produtos filtrados
}
const produtos = [
    { nome: "Produto A", quantEstq: 50, estqMin: 20 },
    { nome: "Produto B", quantEstq: 10, estqMin: 15 },
    { nome: "Produto C", quantEstq: 30, estqMin: 25 },
    { nome: "Produto D", quantEstq: 5, estqMin: 10 },
    { nome: "Produto E", quantEstq: 70, estqMin: 50 }
];
const prodAcMin = listProdAc(produtos);
console.log("Produtos acima do estoque mínimo:"); // exibe produtos que estão acima do mínimo
for (let i = 0; i < prodAcMin.length; i++) {
    console.log(`${prodAcMin[i].nome}: ${prodAcMin[i].quantEstq} em estoque`);
}