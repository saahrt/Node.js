//15. "Calcular o Total de Vendas de Produtos em um Inventário"
function calcularTVend(inventario) {
    let totalVendas = 0; // inicializa o total de vendas
    for (let i = 0; i < inventario.length; i++) {// loop através de cada produto no inventário
        const produto = inventario[i];
        totalVendas += produto.preco * produto.quantidadeVendida; // adc ao total
    }
    return totalVendas; // retorna o t.vendas
}
const inventario = [
    { nome: "Produto A", preco: 10.00, quantidadeVendida: 5 },
    { nome: "Produto B", preco: 20.00, quantidadeVendida: 3 },
    { nome: "Produto C", preco: 15.50, quantidadeVendida: 10 }
];

const total = calcularTVend(inventario);
console.log(`O total de vendas é: R$ ${total.toFixed(2)}`);